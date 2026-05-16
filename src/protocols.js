const PROTOCOL_DATA = {
  PET: {
    title: 'FDG PET/CT 腫瘤影像',
    source: 'EANM/SNMMI FDG PET/CT tumour imaging guideline',
    acquisition: [
      ['Detector / modality', 'PET/CT'],
      ['Tracer', '18F-FDG'],
      ['Patient prep', '禁食 4-6 小時；避免劇烈運動；控制血糖；等待期維持安靜與保暖'],
      ['Uptake time', '常規約 60 分鐘；科內應固定容許範圍'],
      ['Position', 'Supine，arms up/down 依 protocol 固定'],
      ['FOV / scan range', 'Skull base 至 mid-thigh；依病情可延至 vertex 或下肢'],
      ['Time/bed', '數位 PET 多約 1.5-3 分鐘/bed；較舊系統常約 2-4 分鐘/bed'],
      ['CT role', '低劑量 CT AC / localization 為基本；必要時診斷 CT']
    ],
    processing: [
      ['Reconstruction family', 'OSEM，現代系統多合併 TOF'],
      ['Iterations / subsets', '依 vendor validated preset 固定'],
      ['Attenuation correction', 'CT AC'],
      ['Scatter correction', 'Vendor preset'],
      ['Resolution recovery / PSF', '視系統可用'],
      ['Motion correction', '視需要；明顯 motion 應優先辨識而非硬修'],
      ['Quantification', 'SUV 可用於描述與追蹤，前提是流程一致']
    ],
    qc: [
      '注射是否順利，是否有 extravasation',
      '血糖是否在科內可接受範圍',
      'uptake time 是否落在 protocol 規範',
      'CT 與 PET 是否 misregistration',
      'scan range 是否符合臨床問題',
      'reconstruction preset 是否與科內固定版本一致'
    ],
    pitfalls: [
      '注射滲漏',
      '褐色脂肪或肌肉攝取',
      '發炎、感染、術後變化',
      '金屬與 CT AC artifact',
      '呼吸造成肺底 / 肝頂配準誤差'
    ],
    localFixedFields: [
      '血糖門檻與例外處理',
      'uptake time 容許範圍',
      'arms up/down 適用規則',
      'PET reconstruction preset 名稱與版本',
      '低劑量 CT 與診斷 CT 的使用邊界'
    ]
  },
  MPI_Tc99m: {
    title: 'Tc-99m MPI SPECT',
    source: 'SNMMI/ASNC/SCCT cardiac SPECT/CT and PET/CT guideline；ASNC quick references',
    acquisition: [
      ['Detector / modality', 'Dual-head SPECT 或 SPECT/CT'],
      ['Tracer', 'Tc-99m sestamibi 或 tetrofosmin'],
      ['Patient prep', '依 stress protocol；記錄 caffeine、藥物與 stress 條件'],
      ['Position', 'Supine 基本；必要時加 prone / upright'],
      ['Arc', 'Cardiac 180° 常見'],
      ['Orbit', 'Body contour 優先'],
      ['Matrix', '64x64 常見'],
      ['Views', '60 或 64 views 常見'],
      ['Time/view', '約 15-30 秒/stop，依 dose 與體型調整'],
      ['Gating', '8-frame 或 16-frame ECG gating'],
      ['CT role', '若有 SPECT/CT，可做 CT AC']
    ],
    processing: [
      ['Reconstruction family', 'Iterative reconstruction 常見'],
      ['Attenuation correction', 'CT AC 或 none，需與 NAC 對照'],
      ['Scatter correction', '視系統可用'],
      ['Resolution recovery / PSF', '視系統可用'],
      ['Reorientation', 'SA / VLA / HLA cardiac planes'],
      ['Quantification', 'Perfusion scores、EF、wall motion / thickening']
    ],
    qc: [
      'stress 是否達標',
      'ECG gating 是否穩定',
      'CT 與 SPECT 是否 misregistration',
      'raw projection 是否有 motion',
      '是否需要 prone / upright 補拍釐清 artifact'
    ],
    pitfalls: [
      '乳房衰減',
      '橫膈衰減',
      'subdiaphragmatic activity',
      'arrhythmia 造成 gating 不可靠'
    ],
    localFixedFields: [
      'stress protocol 與 caffeine / 藥物限制',
      'supine、prone、upright 補拍條件',
      'AC / NAC 呈現順序',
      'gating frame 與 arrhythmia 處理規則',
      'reorientation 與 quantification software preset'
    ]
  },
  LungVQ: {
    title: 'V/Q Scintigraphy',
    source: 'Pulmonary scintigraphy guideline / archived SNMMI procedure standard',
    acquisition: [
      ['Detector / modality', 'Planar gamma camera，必要時 SPECT 或 SPECT/CT'],
      ['Tracer', 'Ventilation aerosol / gas；perfusion 多為 Tc-99m MAA'],
      ['Patient prep', '確認懷孕、氧氣需求、是否能配合吸入；必要時先看 CXR / CT 脈絡'],
      ['Position', '依設備與病人狀況固定；常見 upright 或 supine'],
      ['Views', '多方位 planar；SPECT 依科內 protocol'],
      ['Counts / time', '以足夠 counts 與可比較視角為主，避免只追求固定時間'],
      ['Sequence', '通常先 ventilation 再 perfusion，避免 perfusion 訊號干擾 ventilation'],
      ['CT role', '若做 SPECT/CT，多用於 localization / attenuation 與鑑別結構性原因']
    ],
    processing: [
      ['Display', 'Ventilation 與 perfusion 成對比較'],
      ['Reconstruction family', 'SPECT/SPECT-CT 依 vendor preset'],
      ['Attenuation correction', '若有 CT AC，需注意 misregistration'],
      ['Quantification', '以 mismatch pattern 與臨床機率整合為主']
    ],
    qc: [
      'ventilation 吸入配合是否足夠',
      'MAA 注射是否順利，是否有滲漏',
      '多方位影像是否完整且左右標記正確',
      '是否有 motion、污染或局部遮蔽',
      'ventilation / perfusion 影像比例與顯示方式是否一致'
    ],
    pitfalls: [
      '病人吸入不佳造成 ventilation 假缺損',
      'COPD 或氣道病變造成非 PE 型 mismatch / matched defect',
      '肺外污染或注射問題',
      '姿勢差異造成配對困難',
      'SPECT/CT misregistration'
    ],
    localFixedFields: [
      'ventilation 藥物與吸入流程',
      'MAA 顆粒數或特殊族群調整',
      'planar views 標準組合',
      '是否常規 SPECT / SPECT-CT',
      'PE 判讀分類與報告模板銜接'
    ]
  }
};

window.NMINFO_PROTOCOL_DATA = PROTOCOL_DATA;
