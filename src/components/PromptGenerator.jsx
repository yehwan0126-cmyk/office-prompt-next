"use client"

import { useState } from "react"
import SpaceSection from "./SpaceSection"
import MaterialsSection from "./MaterialsSection"
import OutputPanel from "./OutputPanel"
import { SPACE_SCALE_BY_TYPE, FURNITURE_BY_TYPE, MATERIALS_BY_ACCENT } from "@/data/options"
import styles from "./PromptGenerator.module.css"

export default function PromptGenerator() {
  const [spaceType,   setSpaceType]   = useState(null)
  const [spaceScale,  setSpaceScale]  = useState("")
  const [furniture,   setFurniture]   = useState("")
  const [accentStyle, setAccentStyle] = useState(null)
  const [floor,       setFloor]       = useState("")
  const [ceiling,     setCeiling]     = useState("")
  const [wall,        setWall]        = useState("")
  const [partition,   setPartition]   = useState("")
  const [ctIdx,       setCtIdx]       = useState(3)

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

  const allReady = spaceType && accentStyle && floor && ceiling && wall && partition

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🏢 Office Interior Prompt Generator</h1>
      <p className={styles.subtitle}>FLUX.1 Pro 모델용 오피스 인테리어 이미지 생성 프롬프트 생성기</p>

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
        />
      )}
    </div>
  )
}
