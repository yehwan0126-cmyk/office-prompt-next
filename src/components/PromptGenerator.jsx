"use client"

import { useState, useEffect } from "react"
import SpaceSection from "./SpaceSection"
import MaterialsSection from "./MaterialsSection"
import OutputPanel from "./OutputPanel"
import HistorySidebar from "./HistorySidebar"
import { SPACE_SCALE_BY_TYPE, FURNITURE_BY_TYPE, MATERIALS_BY_ACCENT, TASK_OPTIONS } from "@/data/options"
import { supabase } from "@/lib/supabase"
import styles from "./PromptGenerator.module.css"

export default function PromptGenerator() {
  const [spaceType,   setSpaceType]   = useState(null)
  const [selectedTask, setSelectedTask] = useState(TASK_OPTIONS[0].value)
  const [spaceScale,  setSpaceScale]  = useState("")
  const [furniture,   setFurniture]   = useState("")
  const [accentStyle, setAccentStyle] = useState(null)
  const [floor,       setFloor]       = useState("")
  const [ceiling,     setCeiling]     = useState("")
  const [wall,        setWall]        = useState("")
  const [partition,   setPartition]   = useState("")
  const [ctIdx,       setCtIdx]       = useState(3)

  const [history,     setHistory]     = useState([])
  const [histLoading, setHistLoading] = useState(true)

  // 히스토리 불러오기
  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("prompt_history")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50)
      if (!error) setHistory(data)
      setHistLoading(false)
    }
    fetchHistory()
  }, [])

  const handleSpaceType = (label) => {
    setSpaceType(label)
    setSpaceScale(Object.keys(SPACE_SCALE_BY_TYPE[label])[0])
    setFurniture(Object.keys(FURNITURE_BY_TYPE[label])[0])
    setAccentStyle(null)
    setFloor(""); setCeiling(""); setWall(""); setPartition("")
  }

  const handleAccentStyle = (label) => {
    setAccentStyle(label)
    const mats = MATERIALS_BY_ACCENT[label]
    setFloor(Object.keys(mats.floor)[0])
    setCeiling(Object.keys(mats.ceiling)[0])
    setWall(Object.keys(mats.wall)[0])
    setPartition(Object.keys(mats.partition)[0])
  }

  // OutputPanel에서 저장 완료 시 히스토리 목록에 추가
  const handleSave = (newItem) => {
    setHistory(prev => [newItem, ...prev])
  }

  // 히스토리 항목 클릭 시 옵션 복원
  const handleSelect = (item) => {
    const o = item.options
    setSpaceType(o.spaceType)
    setSpaceScale(o.spaceScale)
    setFurniture(o.furniture)
    setAccentStyle(o.accentStyle)
    setFloor(o.floor)
    setCeiling(o.ceiling)
    setWall(o.wall)
    setPartition(o.partition)
    setCtIdx(o.ctIdx)
  }

  // 히스토리 삭제
  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("prompt_history")
      .delete()
      .eq("id", id)
    if (!error) setHistory(prev => prev.filter(item => item.id !== id))
  }

  const allReady = spaceType && accentStyle && floor && ceiling && wall && partition

  return (
    <div className={styles.pageLayout}>
      <HistorySidebar
        history={history}
        loading={histLoading}
        onSelect={handleSelect}
        onDelete={handleDelete}
      />

      <div className={styles.container}>
        <h1 className={styles.title}>🏢 Office Interior Prompt Generator</h1>
        <p className={styles.subtitle}>FLUX.1 Pro 모델용 오피스 인테리어 이미지 생성 프롬프트 생성기</p>

        {/* Task 선택 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>⚙️ 작업 방식 선택</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {TASK_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedTask(opt.value)}
                style={{
                  flex: 1,
                  minWidth: "160px",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: selectedTask === opt.value ? "2px solid #a855f7" : "2px solid #3f3f46",
                  background: selectedTask === opt.value ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.03)",
                  color: selectedTask === opt.value ? "#e9d5ff" : "#a1a1aa",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>{opt.label}</div>
                <div style={{ fontSize: "12px", opacity: 0.75 }}>{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <SpaceSection
          spaceType={spaceType}
          spaceScale={spaceScale}
          furniture={furniture}
          onSpaceType={handleSpaceType}
          onSpaceScale={setSpaceScale}
          onFurniture={setFurniture}
        />

        {spaceType && (
          <MaterialsSection
            accentStyle={accentStyle}
            floor={floor}
            ceiling={ceiling}
            wall={wall}
            partition={partition}
            ctIdx={ctIdx}
            onAccentStyle={handleAccentStyle}
            onFloor={setFloor}
            onCeiling={setCeiling}
            onWall={setWall}
            onPartition={setPartition}
            onCtIdx={setCtIdx}
          />
        )}

        {allReady && (
          <OutputPanel
            spaceType={spaceType}
            spaceScale={spaceScale}
            furniture={furniture}
            accentStyle={accentStyle}
            floor={floor}
            ceiling={ceiling}
            wall={wall}
            partition={partition}
            ctIdx={ctIdx}
            selectedTask={selectedTask}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  )
}
