export const SPACE_TYPE = {
  "👔 임원실":       "executive_office",
  "🪑 회의실":       "conference_room",
  "🏢 업무공간":     "open_office",
  "☕ 소셜공간":     "lounge_area",
  "🛎️ 지원공간":    "reception_lobby",
  "🚶 통로공간":     "corridor",
}

export const SPACE_SCALE_BY_TYPE = {
  "👔 임원실": {
    "컴팩트형": { scale:"compact",  ceiling_height:"2.7m", depth_feel:"compact depth" },
    "기본형":   { scale:"standard", ceiling_height:"2.7m", depth_feel:"moderate depth" },
    "확장형":   { scale:"extended", ceiling_height:"2.7m", depth_feel:"long sightlines" },
  },
  "🪑 회의실": {
    "4인 이하":  { scale:"xs_under4", seating_capacity:4,  ceiling_height:"2.7m", depth_feel:"compact depth" },
    "5~9인":    { scale:"s_5to9",    seating_capacity:8,  ceiling_height:"2.7m", depth_feel:"moderate depth" },
    "10~16인":  { scale:"m_10to16",  seating_capacity:14, ceiling_height:"2.7m", depth_feel:"moderate depth" },
    "17인 이상": { scale:"l_17plus",  seating_capacity:20, ceiling_height:"2.7m", depth_feel:"long sightlines" },
  },
  "🏢 업무공간": {
    "소형": { scale:"small",  ceiling_height:"2.7m", depth_feel:"compact depth" },
    "중형": { scale:"medium", ceiling_height:"2.7m", depth_feel:"moderate depth" },
    "대형": { scale:"large",  ceiling_height:"2.7m", depth_feel:"long sightlines" },
  },
  "☕ 소셜공간": {
    "소형": { scale:"small",  ceiling_height:"3.0m", depth_feel:"compact depth" },
    "중형": { scale:"medium", ceiling_height:"3.0m", depth_feel:"moderate depth" },
    "대형": { scale:"large",  ceiling_height:"3.0m", depth_feel:"long sightlines" },
  },
  "🛎️ 지원공간": {
    "소형": { scale:"small",  ceiling_height:"3.0m", depth_feel:"compact depth" },
    "중형": { scale:"medium", ceiling_height:"3.0m", depth_feel:"moderate depth" },
    "대형": { scale:"large",  ceiling_height:"3.0m", depth_feel:"long sightlines" },
  },
  "🚶 통로공간": {
    "소형": { scale:"small",  ceiling_height:"3.0m", depth_feel:"compact depth" },
    "중형": { scale:"medium", ceiling_height:"3.0m", depth_feel:"moderate depth" },
    "대형": { scale:"large",  ceiling_height:"3.0m", depth_feel:"long sightlines" },
  },
}

export const FURNITURE_BY_TYPE = {
  "👔 임원실": {
    "컴팩트형": { "임원형 데스크 + 체어 + 4인 원형테이블":          "executive_desk_chair_4p_round_table" },
    "기본형":   { "임원형 데스크 + 체어 + 6인 사각 회의테이블":     "executive_desk_chair_6p_rect_table" },
    "확장형":   { "임원형 L형 데스크 + 체어 + 8인 사각 회의테이블": "executive_ldesk_chair_8p_rect_table" },
  },
  "🪑 회의실": {
    "4인 이하":  { "원형 테이블 + 회의용 의자 + TV":           "round_table_with_meeting_chairs_and_tv" },
    "5~9인":    { "대면형 직사각형 테이블 + 회의용 의자 + TV": "face_to_face_rect_table_with_meeting_chairs_and_tv" },
    "10~16인":  { "대면형 직사각형 테이블 + 회의용 의자 + TV": "face_to_face_rect_table_with_meeting_chairs_and_tv" },
    "17인 이상": { "컨퍼런스용 회의 테이블 + 회의용 의자 + TV": "conference_table_with_meeting_chairs_and_tv" },
  },
  "🏢 업무공간": {
    "소형": {
      "일렬 배치 (벤칭)":          "open_office_benching_linear_rows",
      "독립 데스크 배치":           "independent_desk_grid_layout",
      "4인 그룹 배치":              "cluster_4p_group_layout",
      "업무 + 전화부스 혼합":       "benching_with_phone_booth",
      "업무 + 협업존 혼합":         "benching_with_collaboration_zone",
      "업무 + 협업 + 집중존 혼합":  "benching_with_collaboration_and_focus_zone",
    },
    "중형": {
      "일렬 배치 (벤칭)":          "open_office_benching_linear_rows",
      "독립 데스크 배치":           "independent_desk_grid_layout",
      "4인 그룹 배치":              "cluster_4p_group_layout",
      "업무 + 전화부스 혼합":       "benching_with_phone_booth",
      "업무 + 협업존 혼합":         "benching_with_collaboration_zone",
      "업무 + 협업 + 집중존 혼합":  "benching_with_collaboration_and_focus_zone",
    },
    "대형": {
      "일렬 배치 (벤칭)":          "open_office_benching_linear_rows",
      "독립 데스크 배치":           "independent_desk_grid_layout",
      "4인 그룹 배치":              "cluster_4p_group_layout",
      "업무 + 전화부스 혼합":       "benching_with_phone_booth",
      "업무 + 협업존 혼합":         "benching_with_collaboration_zone",
      "업무 + 협업 + 집중존 혼합":  "benching_with_collaboration_and_focus_zone",
    },
  },
  "☕ 소셜공간": {
    "소형": {
      "소파 + 낮은 테이블 중심":    "sofa_and_low_table_centered",
      "바 테이블 + 높은 의자":      "bar_table_with_high_chairs",
      "1인 라운지 체어 배치":       "single_lounge_chair_layout",
      "소파 + 바 테이블 혼합":      "sofa_and_bar_table_mixed",
      "카페 스타일 (4인 테이블 다수)": "cafe_style_multiple_4p_tables",
    },
    "중형": {
      "소파 + 낮은 테이블 중심":    "sofa_and_low_table_centered",
      "바 테이블 + 높은 의자":      "bar_table_with_high_chairs",
      "1인 라운지 체어 배치":       "single_lounge_chair_layout",
      "소파 + 바 테이블 혼합":      "sofa_and_bar_table_mixed",
      "카페 스타일 (4인 테이블 다수)": "cafe_style_multiple_4p_tables",
    },
    "대형": {
      "소파 + 낮은 테이블 중심":    "sofa_and_low_table_centered",
      "바 테이블 + 높은 의자":      "bar_table_with_high_chairs",
      "1인 라운지 체어 배치":       "single_lounge_chair_layout",
      "소파 + 바 테이블 혼합":      "sofa_and_bar_table_mixed",
      "카페 스타일 (4인 테이블 다수)": "cafe_style_multiple_4p_tables",
    },
  },
  "🛎️ 지원공간": {
    "소형": {
      "리셉션 — 카운터 + 대기 소파": "reception_counter_with_waiting_sofa",
      "라커룸 — 라커 + 벤치":        "locker_room_with_bench",
      "휴식공간 — 소파 + 낮은 테이블": "break_room_sofa_low_table",
      "팬트리 — 주방 카운터 + 바 테이블": "pantry_kitchen_counter_bar_table",
    },
    "중형": {
      "리셉션 — 카운터 + 대기 소파": "reception_counter_with_waiting_sofa",
      "라커룸 — 라커 + 벤치":        "locker_room_with_bench",
      "휴식공간 — 소파 + 낮은 테이블": "break_room_sofa_low_table",
      "팬트리 — 주방 카운터 + 바 테이블": "pantry_kitchen_counter_bar_table",
    },
    "대형": {
      "리셉션 — 카운터 + 대기 소파": "reception_counter_with_waiting_sofa",
      "라커룸 — 라커 + 벤치":        "locker_room_with_bench",
      "휴식공간 — 소파 + 낮은 테이블": "break_room_sofa_low_table",
      "팬트리 — 주방 카운터 + 바 테이블": "pantry_kitchen_counter_bar_table",
    },
  },
  "🚶 통로공간": {
    "소형": {
      "벽면 수납장 + 통로":       "wall_storage_with_passage",
      "아트월 + 통로":            "art_wall_with_passage",
      "유리 파티션 + 통로":       "glass_partition_with_passage",
      "간접조명 벽면 + 통로":     "indirect_lighting_wall_with_passage",
      "소파 부스 + 통로":         "sofa_booth_with_passage",
    },
    "중형": {
      "벽면 수납장 + 통로":       "wall_storage_with_passage",
      "아트월 + 통로":            "art_wall_with_passage",
      "유리 파티션 + 통로":       "glass_partition_with_passage",
      "간접조명 벽면 + 통로":     "indirect_lighting_wall_with_passage",
      "소파 부스 + 통로":         "sofa_booth_with_passage",
    },
    "대형": {
      "벽면 수납장 + 통로":       "wall_storage_with_passage",
      "아트월 + 통로":            "art_wall_with_passage",
      "유리 파티션 + 통로":       "glass_partition_with_passage",
      "간접조명 벽면 + 통로":     "indirect_lighting_wall_with_passage",
      "소파 부스 + 통로":         "sofa_booth_with_passage",
    },
  },
}

export const ACCENT_STYLE = {
  "💡 MINIMAL":    "minimal_startup",
  "🌿 NATURAL":    "natural_wood",
  "🎨 CREATIVE":   "one_color_point_creative",
  "💎 PREMIUM":    "premium_luxury",
  "⚙️ INDUSTRIAL": "industrial",
  "🤖 HIGHTECH":   "hightech_metallic",
}

export const MATERIALS_BY_ACCENT = {
  "💡 MINIMAL": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
  "🌿 NATURAL": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
  "🎨 CREATIVE": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
  "💎 PREMIUM": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
  "⚙️ INDUSTRIAL": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
  "🤖 HIGHTECH": {
    floor:   {"그레이 카펫 타일":"gray_carpet_tile"},
    ceiling: {"매립형 평천장":"flush_flat_ceiling"},
    wall:    {"오프화이트 페인트":"off_white_paint"},
  },
}

export const COLOR_TEMP_STEPS = [
  {range:"2700~3000K", desc:"웜화이트 — 따뜻하고 아늑한 분위기",         k:2700, json:"warm_white_cozy_ambiance"},
  {range:"3000~3500K", desc:"웜뉴트럴 — 부드럽고 자연스러운 톤",         k:3200, json:"warm_neutral_soft_tone"},
  {range:"3500~4000K", desc:"소프트화이트 — 편안한 업무 환경",           k:3700, json:"soft_white_comfortable"},
  {range:"4000~4500K", desc:"자연광 — 맑고 균형 잡힌 빛 (오피스 표준)", k:4000, json:"natural_daylight_balanced"},
  {range:"4500~5000K", desc:"쿨뉴트럴 — 선명하고 집중되는 분위기",       k:4700, json:"cool_neutral_crisp"},
  {range:"5000~5500K", desc:"쿨화이트 — 밝고 활기찬 환경",               k:5200, json:"cool_white_bright"},
  {range:"5500~6500K", desc:"데이라이트 — 청량하고 또렷한 조명",         k:6000, json:"daylight_crisp_clear"},
]

export const SYSTEM_DEFAULTS = {
  constraints: { scale_reference:"human_scale", geometry_plausibility:"strict", verticals_straight:true, avoid_concepts:["watermark","text_overlay","extreme_fisheye"] },
  quality: { render_fidelity:"photoreal", postprocess_style:"minimal" },
  camera: { viewpoint:"eye_level", lens:"wide_24_28mm" },
}

export const SYSTEM_DEFAULTS_STYLE_TRANSFER = {
  constraints: { scale_reference:"human_scale", geometry_plausibility:"strict", verticals_straight:true, avoid_concepts:["watermark","text_overlay","extreme_fisheye"] },
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
  {
    value: "structure-style-composite",
    label: "🖼️ 구조+스타일 합성",
    desc: "image1 구조 유지 + image2 스타일 적용",
  },
]

export const PROMPT_STRUCTURE_STYLE_COMPOSITE =
`Architectural interior photorealistic visualization.
Preserve the exact spatial layout, room geometry, furniture placement, and structural composition from image 1.
Apply the color palette, material textures, surface finishes, and overall visual atmosphere from image 2 onto the structure of image 1.
Maintain human scale, straight verticals, wide-angle lens 24-28mm, eye-level viewpoint.
Empty space with clean surfaces, photorealistic render quality.`