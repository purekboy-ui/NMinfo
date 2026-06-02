from __future__ import annotations

import json
import re
import shutil
from dataclasses import dataclass
from pathlib import Path

import fitz
from PIL import Image


REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = REPO_ROOT / "nucmed-exam-review" / "data"
OUTPUT_DIR = REPO_ROOT / "nucmed-exam-review" / "assets" / "radiation-answer-scans"
MANIFEST_PATH = OUTPUT_DIR / "manifest.json"

EXTERNAL_ROOT = next(
    (
        Path(candidate)
        for candidate in ("/mnt/d/NMDEV/核醫考古題", "D:/NMDEV/核醫考古題")
        if Path(candidate).exists()
    ),
    None,
)

if EXTERNAL_ROOT is None:
    raise SystemExit("找不到外部考題來源目錄：/mnt/d/NMDEV/核醫考古題")

RPS_DIR = EXTERNAL_ROOT / "輻防師考古"
RPO_DIR = EXTERNAL_ROOT / "輻射防護員"

PDF_MAP = {
    "rps-106-1-professional": RPS_DIR / "106年_第1次_輻防師_專業_解答.pdf",
    "rps-106-2-professional": RPS_DIR / "106年_第2次_輻防師_專業_解答.pdf",
    "rps-107-1-professional": RPS_DIR / "107年_第1次_輻防師_專業_解答.pdf",
    "rps-107-2-professional": RPS_DIR / "107年_第2次_輻防師_專業_解答.pdf",
    "rps-108-1-professional": RPS_DIR / "108年_第1次_輻防師_專業_解答.pdf",
    "rps-108-2-professional": RPS_DIR / "108年_第2次_輻防師_專業_解答.pdf",
    "rps-109-2-professional": RPS_DIR / "109年_第2次_輻防師_專業_解答.pdf",
    "rps-110-1-professional": RPS_DIR / "110年_第1次_輻防師_專業_解答.pdf",
    "rps-110-2-professional": RPS_DIR / "110年_第2次_輻防師_專業_解答.pdf",
    "rps-111-2-professional": RPS_DIR / "111年_第2次_輻防師_專業_解答.pdf",
    "rps-112-1-professional": RPS_DIR / "112年_第1次_輻防師_專業_解答.pdf",
    "rps-112-2-professional": RPS_DIR / "112年_第2次_輻防師_專業_解答審題版.pdf",
    "rps-113-1-professional": RPS_DIR / "113年_第1次_輻防師_專業_解答.pdf",
    "rps-113-2-professional": RPS_DIR / "113年_第2次_輻防師_專業_解答.pdf",
    "rps-114-1-professional": RPS_DIR / "114年_第1次_輻防師_專業_解答.pdf",
    "rps-114-2-professional": RPS_DIR / "114年_第2次_輻防師_專業_解答_更新版.pdf",
    "rps-115-1-professional": RPS_DIR / "115年_第1次_輻防師_專業_解答.pdf",
    "rpo-106-1-professional": RPO_DIR / "【106-1】【輻射防護員】【專業科目】【解答】R.pdf",
    "rpo-106-2-professional": RPO_DIR / "【106-2】【輻射防護員】【專業科目】【解答】.pdf",
    "rpo-107-1-professional": RPO_DIR / "【107-1】【輻射防護員】【專業科目】【解答】.pdf",
    "rpo-107-2-professional": RPO_DIR / "【107-2】【輻射防護員】【專業科目】【解答】R.pdf",
    "rpo-108-1-professional": RPO_DIR / "【108-1】【員】【專業】【解答】.pdf",
    "rpo-108-2-professional": RPO_DIR / "【108-2】【員】【專業】【解答】.pdf",
    "rpo-109-2-professional": RPO_DIR / "4.109年度第2次輻射防護員_游離輻射防護專業試題【解答】.pdf",
    "rpo-110-1-professional": RPO_DIR / "【4】110年度第1次輻射防護員_游離輻射防護專業試題【公告-解答】.pdf",
    "rpo-110-2-professional": RPO_DIR / "【4】110年度第2次輻射防護員_游離輻射防護專業試題【解答版】.pdf",
    "rpo-111-1-professional": RPO_DIR / "【解答】111年度第1次輻射防護員-專業.pdf",
    "rpo-111-2-professional": RPO_DIR / "111年度第2次輻射防護員_游離輻射防護專業試題【解答】.pdf",
    "rpo-112-1-professional": RPO_DIR / "【解答】112年度第1次輻射防護員_游離輻射防護專業試題.pdf",
    "rpo-112-2-professional": RPO_DIR / "【解答】112年度第2次輻射防護員_游離輻射防護專業試題【審題版】.pdf",
    "rpo-113-1-professional": RPO_DIR / "【解答】113年度第1次輻射防護員_游離輻射防護專業試題.pdf",
    "rpo-113-2-professional": RPO_DIR / "113年度第2次輻射防護員_游離輻射防護專業試題【解答】.pdf",
    "rpo-114-1-professional": RPO_DIR / "114年度第1次輻射防護員_游離輻射防護專業試題【解答】.pdf",
    "rpo-114-2-professional": RPO_DIR / "114年度第2次輻射防護員_游離輻射防護專業試題【解答】.pdf",
    "rpo-115-1-professional": RPO_DIR / "115年度第1次輻射防護員_游離輻射防護專業【解答】.pdf",
}

QUESTION_TOKEN_X_MAX = 100
RENDER_SCALE = 2.4
PAGE_TOP = 48
TOP_MARGIN = 10
BOTTOM_MARGIN = 14
CONTINUATION_MIN_Y = 120


@dataclass
class Anchor:
    number: int
    page_index: int
    y0: float


def load_paper_data(paper_id: str) -> dict:
    raw = (DATA_DIR / f"{paper_id}.js").read_text(encoding="utf-8")
    match = re.search(r"=\s*(\{[\s\S]*\})\s*;\s*$", raw)
    if not match:
        raise ValueError(f"無法解析題庫檔案：{paper_id}")
    return json.loads(match.group(1))


def find_section_start_y(page: fitz.Page) -> float | None:
    for keyword in ("二、計算問答題", "計算問答題"):
        hits = page.search_for(keyword)
        if hits:
            return max(rect.y1 for rect in hits)
    return None


def extract_essay_anchors(doc: fitz.Document, essay_numbers: list[int]) -> list[Anchor]:
    anchors: list[Anchor] = []
    essay_started = False
    next_index = 0

    for page_index in range(doc.page_count):
        if next_index >= len(essay_numbers):
            break

        page = doc[page_index]
        min_y = 0.0

        if not essay_started:
            section_start_y = find_section_start_y(page)
            if section_start_y is None:
                continue
            essay_started = True
            min_y = section_start_y

        words = sorted(page.get_text("words"), key=lambda word: (round(word[1], 2), word[0]))
        expected_number = essay_numbers[next_index]

        for x0, y0, _x1, _y1, text, *_rest in words:
            if x0 > QUESTION_TOKEN_X_MAX or y0 <= min_y:
                continue
            if text != f"{expected_number}.":
                continue

            anchors.append(Anchor(number=expected_number, page_index=page_index, y0=y0))
            next_index += 1
            if next_index >= len(essay_numbers):
                break
            expected_number = essay_numbers[next_index]

        if not essay_started:
            continue

    if len(anchors) != len(essay_numbers):
        missing = essay_numbers[len(anchors):]
        raise RuntimeError(f"題號定位失敗，缺少問答題：{missing}")

    return anchors


def get_footer_top(page: fitz.Page) -> float:
    footer_top = page.rect.height - 24
    for block in page.get_text("blocks"):
        x0, y0, _x1, _y1, text, *_rest = block
        if "頁/共" in text:
            footer_top = min(footer_top, y0 - 4)
    return footer_top


def get_content_bottom(page: fitz.Page, min_y: float) -> float:
    content_bottom = min_y + 40
    for block in page.get_text("blocks"):
        _x0, y0, _x1, y1, text, *_rest = block
        if not text.strip() or "頁/共" in text or y1 <= min_y:
            continue
        content_bottom = max(content_bottom, y1 + 8)
    return content_bottom


def render_crop(page: fitz.Page, top: float, bottom: float, output_path: Path) -> None:
    clip = fitz.Rect(0, top, page.rect.width, bottom)
    pix = page.get_pixmap(matrix=fitz.Matrix(RENDER_SCALE, RENDER_SCALE), clip=clip, alpha=False)
    image = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    image.save(output_path, "WEBP", quality=90, method=6)


def build_answer_images(doc: fitz.Document, paper: dict, anchors: list[Anchor]) -> dict[str, list[dict[str, str]]]:
    manifest_entry: dict[str, list[dict[str, str]]] = {}

    for index, anchor in enumerate(anchors):
        next_anchor = anchors[index + 1] if index + 1 < len(anchors) else None
        question_number = anchor.number
        paper_dir = OUTPUT_DIR / paper["id"]
        paper_dir.mkdir(parents=True, exist_ok=True)

        image_parts: list[dict[str, str]] = []
        part_number = 1

        last_page_index = next_anchor.page_index if next_anchor else doc.page_count - 1
        for page_index in range(anchor.page_index, last_page_index + 1):
            page = doc[page_index]
            top = PAGE_TOP
            bottom = get_footer_top(page)

            if page_index == anchor.page_index:
                top = max(PAGE_TOP, anchor.y0 - TOP_MARGIN)

            if next_anchor and page_index == next_anchor.page_index:
                if page_index != anchor.page_index and next_anchor.y0 < CONTINUATION_MIN_Y:
                    break
                bottom = min(bottom, next_anchor.y0 - BOTTOM_MARGIN)
            else:
                bottom = min(bottom, get_content_bottom(page, top))

            if bottom - top < 24:
                continue

            filename = f"q{question_number}-{part_number}.webp"
            output_path = paper_dir / filename
            render_crop(page, top, bottom, output_path)
            image_parts.append(
                {
                    "src": f"./assets/radiation-answer-scans/{paper['id']}/{filename}",
                    "alt": f"{paper['title']} 問答第 {question_number} 題原始解答截圖（第 {part_number} 張）",
                }
            )
            part_number += 1

        if not image_parts:
            raise RuntimeError(f"{paper['id']} 第 {question_number} 題未產生任何截圖")

        manifest_entry[str(question_number)] = image_parts

    return manifest_entry


def main() -> None:
    missing_files = [paper_id for paper_id, pdf_path in PDF_MAP.items() if not pdf_path.exists()]
    if missing_files:
        raise SystemExit(f"找不到原始 PDF：{missing_files}")

    if OUTPUT_DIR.exists():
        for child in OUTPUT_DIR.iterdir():
            if child.is_dir():
                shutil.rmtree(child)
            elif child.name != "manifest.json":
                child.unlink()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    manifest: dict[str, dict[str, list[dict[str, str]]]] = {}

    for paper_id in sorted(PDF_MAP):
        paper = load_paper_data(paper_id)
        essay_numbers = [question["number"] for question in paper["questions"] if question.get("kind") == "essay"]
        if not essay_numbers:
            continue

        with fitz.open(PDF_MAP[paper_id]) as doc:
            anchors = extract_essay_anchors(doc, essay_numbers)
            manifest[paper_id] = build_answer_images(doc, paper, anchors)

        print(f"generated {paper_id}: {len(essay_numbers)} 題")

    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"manifest written: {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
