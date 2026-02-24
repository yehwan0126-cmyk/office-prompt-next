export const SPACE_TYPE = {
  "🏢 오픈 오피스":        "open_office",
  "🪑 회의실":             "conference_room",
  "👔 임원실":             "executive_office",
  "☕ 라운지 / 휴게 공간": "lounge_area",
  "🛎️ 리셉션 / 로비":     "reception_lobby",
  "🚶 복도":               "corridor",
}

export const SPACE_SCALE_BY_TYPE = {
  "🏢 오픈 오피스":        {"소형":"small","중형":"medium","대형":"large"},
  "🪑 회의실":             {"1~4인":"xs_1to4","4~8인":"s_4to8","8~12인":"m_8to12","12인 이상":"l_12plus"},
  "👔 임원실":             {"소형":"small","중형":"medium","대형":"large"},
  "☕ 라운지 / 휴게 공간": {"소형":"small","중형":"medium","대형":"large"},
  "🛎️ 리셉션 / 로비":     {"소형":"small","중형":"medium","대형":"large"},
  "🚶 복도":               {"소형":"small","중형":"medium","대형":"large"},
}

export const FURNITURE_BY_TYPE = {
  "🏢 오픈 오피스": {"오픈 벤칭 (선형 배열)":"open_office_benching_linear_rows","클러스터형 팀 데스크":"clustered_team_desks_collaborative_zones","핫데스킹 / 플렉시블":"hot_desking_flexible_seating"},
  "🪑 회의실":      {"직사각형 회의 테이블":"rectangular_conference_table","원형 회의 테이블":"round_conference_table","U자형 배열":"u_shape_arrangement","교실형 배열":"classroom_style_arrangement"},
  "👔 임원실":      {"임원형 단독 데스크 + 소파 세트":"executive_desk_with_sofa_set","임원형 단독 데스크 + 미팅 테이블":"executive_desk_with_meeting_table","L자형 코너 데스크":"l_shaped_corner_desk"},
  "☕ 라운지 / 휴게 공간": {"소파 + 로우 테이블 중심":"sofa_and_low_table_centered","바 테이블 + 하이체어 혼합":"bar_table_with_high_chairs_mixed","캐주얼 빈백 + 모듈형 소파":"casual_beanbag_modular_sofa"},
  "🛎️ 리셉션 / 로비": {"리셉션 카운터 + 대기 소파":"reception_counter_with_waiting_sofa","리셉션 카운터 + 스탠딩 존":"reception_counter_with_standing_zone","미니멀 카운터 단독":"minimal_counter_only"},
  "🚶 복도":        {"벽면 수납장 + 통로":"wall_storage_with_passage","벤치 + 아트월":"bench_with_art_wall","오픈 통로 (가구 없음)":"open_passage_no_furniture"},
}

export const ACCENT_STYLE = {
  "💡 미니멀 스타트업":          "minimal_startup",
  "🌿 내추럴 우드":              "natural_wood",
  "💎 프리미엄 럭셔리":          "premium_luxury",
  "🎨 컬러 포인트 크리에이티브": "color_point_creative",
  "⚙️ 인더스트리얼":             "industrial",
  "🤖 하이테크 메탈릭":          "hightech_metallic",
}

export const MATERIALS_BY_ACCENT = {
  "💡 미니멀 스타트업": {
    floor:     {"라이트 오크 우드":"light_oak_wood_flooring","그레이 카펫 타일":"gray_carpet_tile","콘크리트 폴리싱":"polished_concrete_floor"},
    ceiling:   {"노출 천장 (화이트)":"exposed_ceiling_with_white_paint","매립형 평천장":"flush_flat_ceiling","어쿠스틱 패널 천장":"acoustic_panel_ceiling"},
    wall:      {"오프화이트 페인트":"off_white_painted_wall","패브릭 어쿠스틱 패널":"fabric_acoustic_panel_wall","유리 파티션 월":"glass_partition_wall"},
    partition: {"로우 패브릭 파티션":"low_fabric_workstation_partitions_in_neutral_gray","파티션 없음":"no_partitions_open_plan","유리 파티션":"glass_office_partitions"},
  },
  "🌿 내추럴 우드": {
    floor:     {"헤링본 우드 패턴":"herringbone_wood_pattern","라이트 오크 우드":"light_oak_wood_flooring","다크 월넛 우드":"dark_walnut_wood_flooring"},
    ceiling:   {"우드 슬랫 천장":"wood_slat_ceiling","노출 천장 (화이트)":"exposed_ceiling_with_white_paint","매립형 평천장":"flush_flat_ceiling"},
    wall:      {"우드 패널":"wood_panel_wall","오프화이트 페인트":"off_white_painted_wall","패브릭 어쿠스틱 패널":"fabric_acoustic_panel_wall"},
    partition: {"루버 목재 파티션":"louvered_wood_partitions","로우 패브릭 파티션":"low_fabric_workstation_partitions_in_neutral_gray","오픈 셸빙 파티션":"open_shelving_partitions"},
  },
  "💎 프리미엄 럭셔리": {
    floor:     {"화이트 대리석 타일":"white_marble_tile","다크 월넛 우드":"dark_walnut_wood_flooring","헤링본 우드 패턴":"herringbone_wood_pattern"},
    ceiling:   {"매립형 평천장":"flush_flat_ceiling","우드 슬랫 천장":"wood_slat_ceiling","어쿠스틱 패널 천장":"acoustic_panel_ceiling"},
    wall:      {"오프화이트 페인트":"off_white_painted_wall","우드 패널":"wood_panel_wall","패브릭 어쿠스틱 패널":"fabric_acoustic_panel_wall"},
    partition: {"유리 파티션":"glass_office_partitions","루버 목재 파티션":"louvered_wood_partitions","파티션 없음":"no_partitions_open_plan"},
  },
  "🎨 컬러 포인트 크리에이티브": {
    floor:     {"그레이 카펫 타일":"gray_carpet_tile","라이트 오크 우드":"light_oak_wood_flooring","콘크리트 폴리싱":"polished_concrete_floor"},
    ceiling:   {"노출 천장 (화이트)":"exposed_ceiling_with_white_paint","어쿠스틱 패널 천장":"acoustic_panel_ceiling","매립형 평천장":"flush_flat_ceiling"},
    wall:      {"딥 그린 포인트 벽":"deep_green_accent_wall","오프화이트 페인트":"off_white_painted_wall","패브릭 어쿠스틱 패널":"fabric_acoustic_panel_wall"},
    partition: {"로우 패브릭 파티션":"low_fabric_workstation_partitions_in_neutral_gray","오픈 셸빙 파티션":"open_shelving_partitions","유리 파티션":"glass_office_partitions"},
  },
  "⚙️ 인더스트리얼": {
    floor:     {"콘크리트 폴리싱":"polished_concrete_floor","다크 월넛 우드":"dark_walnut_wood_flooring","그레이 카펫 타일":"gray_carpet_tile"},
    ceiling:   {"노출 천장 (다크)":"exposed_ceiling_with_dark_paint","노출 천장 (화이트)":"exposed_ceiling_with_white_paint","매립형 평천장":"flush_flat_ceiling"},
    wall:      {"콘크리트 노출":"exposed_concrete_wall","우드 패널":"wood_panel_wall","오프화이트 페인트":"off_white_painted_wall"},
    partition: {"오픈 셸빙 파티션":"open_shelving_partitions","루버 목재 파티션":"louvered_wood_partitions","파티션 없음":"no_partitions_open_plan"},
  },
  "🤖 하이테크 메탈릭": {
    floor:     {"콘크리트 폴리싱":"polished_concrete_floor","화이트 대리석 타일":"white_marble_tile","그레이 카펫 타일":"gray_carpet_tile"},
    ceiling:   {"매립형 평천장":"flush_flat_ceiling","노출 천장 (다크)":"exposed_ceiling_with_dark_paint","어쿠스틱 패널 천장":"acoustic_panel_ceiling"},
    wall:      {"유리 파티션 월":"glass_partition_wall","콘크리트 노출":"exposed_concrete_wall","오프화이트 페인트":"off_white_painted_wall"},
    partition: {"유리 파티션":"glass_office_partitions","파티션 없음":"no_partitions_open_plan","로우 패브릭 파티션":"low_fabric_workstation_partitions_in_neutral_gray"},
  },
}

export const COLOR_TEMP_STEPS = [
  {range:"2700~3000K", desc:"웜화이트 — 따뜻하고 아늑한 분위기",         k:2700, json:"warm_white_lighting_2700K_cozy_ambiance"},
  {range:"3000~3500K", desc:"웜뉴트럴 — 부드럽고 자연스러운 톤",         k:3200, json:"warm_neutral_lighting_3200K_soft_tone"},
  {range:"3500~4000K", desc:"소프트화이트 — 편안한 업무 환경",           k:3700, json:"soft_white_lighting_3700K_comfortable"},
  {range:"4000~4500K", desc:"자연광 — 맑고 균형 잡힌 빛 (오피스 표준)", k:4000, json:"natural_daylight_lighting_4000K_balanced"},
  {range:"4500~5000K", desc:"쿨뉴트럴 — 선명하고 집중되는 분위기",       k:4700, json:"cool_neutral_lighting_4700K_crisp"},
  {range:"5000~5500K", desc:"쿨화이트 — 밝고 활기찬 환경",               k:5200, json:"cool_white_lighting_5200K_bright"},
  {range:"5500~6500K", desc:"데이라이트 — 청량하고 또렷한 조명",         k:6000, json:"daylight_lighting_6000K_crisp_clear"},
]

export const SYSTEM_DEFAULTS = {
  constraints: { scale_reference:"human_scale", geometry_plausibility:"strict", verticals_straight:true, avoid_concepts:["people","watermark","text_overlay","extreme_fisheye"] },
  quality: { render_fidelity:"photoreal", postprocess_style:"minimal" },
  camera: { viewpoint:"eye_level", lens:"wide_24_28mm" },
}

export const SYSTEM_DEFAULTS_STYLE_TRANSFER = {
  constraints: { scale_reference:"human_scale", geometry_plausibility:"strict", verticals_straight:true, avoid_concepts:["people","watermark","text_overlay","extreme_fisheye"] },
  quality: { render_fidelity:"photoreal", postprocess_style:"minimal" },
  camera: { viewpoint:"eye_level", lens:"wide_24_28mm" },
  style_transfer: {
    preserve_structure: true,
    structure_fidelity: "high",
    style_override: "full",
    reference_image_required: true,
  },
}

export const TASK_OPTIONS = [
  {
    value: "photorealistic_architectural_visualization",
    label: "🏛️ 건축 시각화",
    desc: "사실적인 오피스 인테리어 렌더링 생성",
  },
  {
    value: "image-style-transfer",
    label: "🎨 이미지 스타일 전환",
    desc: "참고 이미지의 구조를 유지하며 스타일 적용",
  },
]