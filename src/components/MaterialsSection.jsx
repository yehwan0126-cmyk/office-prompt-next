"use client"

import { useState, useEffect } from "react"
import PillButton from "./PillButton"
import { ACCENT_STYLE, MATERIALS_BY_ACCENT, COLOR_TEMP_STEPS } from "@/data/options"
import styles from "./PromptGenerator.module.css"

const FREE_INPUT_KEY = "✏️ 자유 입력"

function MaterialSelect({ label, value, defaultValue, onChange }) {
  const isFree = value?.startsWith("__free__")
  const [freeText, setFreeText] = useState(isFree ? value.replace("__free__", "") : "")

  useEffect(() => {
    if (!isFree) setFreeText("")
  }, [value])

  const selectValue = isFree ? FREE_INPUT_KEY : "ACCENT STYLE값에 따름"

  const handleSelect = (e) => {
    if (e.target.value === FREE_INPUT_KEY) {
      setFreeText("")
      onChange("__free__")
    } else {
      onChange(defaultValue)
    }
  }

  const handleFreeText = (e) => {
    const v = e.target.value
    setFreeText(v)
    onChange(`__free__${v}`)
  }

  return (
    <div>
      <label className={styles.fieldLabel}>{label}</label>
      <select className={styles.select} value={selectValue} onChange={handleSelect}>
        <option value="ACCENT STYLE값에 따름">ACCENT STYLE값에 따름</option>
        <option>{FREE_INPUT_KEY}</option>
      </select>
      {isFree && (
        <input
          className={styles.select}
          style={{ marginTop: "8px" }}
          type="text"
          placeholder={`${label}을 직접 입력하세요`}
          value={freeText}
          onChange={handleFreeText}
        />
      )}
    </div>
  )
}

export default function MaterialsSection({ accentStyle, floor, ceiling, wall, ctIdx, lightingType, onAccentStyle, onFloor, onCeiling, onWall, onCtIdx, onLightingType }) {
  return (
    <div>
      {/* 액센트 스타일 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>02 · 액센트 스타일</h2>
        <div>
          {Object.keys(ACCENT_STYLE).map(label => (
            <PillButton
              key={label}
              label={label}
              isActive={accentStyle === label}
              onClick={() => onAccentStyle(label)}
            />
          ))}
        </div>
      </div>

      {/* 마감재 */}
      {accentStyle && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>03 · 마감재</h2>
          <div className={styles.grid4}>
            <MaterialSelect
              label="바닥재"
              value={floor}
              defaultValue={Object.keys(MATERIALS_BY_ACCENT[accentStyle].floor)[0]}
              onChange={onFloor}
            />
            <MaterialSelect
              label="천장"
              value={ceiling}
              defaultValue={Object.keys(MATERIALS_BY_ACCENT[accentStyle].ceiling)[0]}
              onChange={onCeiling}
            />
            <MaterialSelect
              label="벽"
              value={wall}
              defaultValue={Object.keys(MATERIALS_BY_ACCENT[accentStyle].wall)[0]}
              onChange={onWall}
            />
          </div>
        </div>
      )}

      {/* 조명 */}
      {accentStyle && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>04 · 조명</h2>
          <label className={styles.fieldLabel}>색온도</label>
          <input
            type="range"
            min={0} max={6} step={1}
            value={ctIdx}
            onChange={e => onCtIdx(Number(e.target.value))}
            className={styles.slider}
          />
          <p className={styles.sliderDesc}>
            {COLOR_TEMP_STEPS[ctIdx].range} &nbsp;|&nbsp; {COLOR_TEMP_STEPS[ctIdx].desc}
          </p>
          <div style={{ marginTop: "16px" }}>
            <label className={styles.fieldLabel}>조명 형태 (선택)</label>
            <input
              className={styles.select}
              type="text"
              placeholder="예) 펜던트 조명, 간접 조명, 스탠드 조명"
              value={lightingType}
              onChange={e => onLightingType(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
