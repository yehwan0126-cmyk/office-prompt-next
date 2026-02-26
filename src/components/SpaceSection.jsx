"use client"

import { useState, useEffect } from "react"
import PillButton from "./PillButton"
import { SPACE_TYPE, SPACE_SCALE_BY_TYPE, FURNITURE_BY_TYPE } from "@/data/options"
import styles from "./PromptGenerator.module.css"

const FREE_INPUT_KEY = "✏️ 자유 입력"

export default function SpaceSection({ spaceType, spaceScale, furniture, additionalElements, onSpaceType, onSpaceScale, onFurniture, onAdditionalElements }) {
  const [freeText, setFreeText] = useState("")

  const isFreeInput = furniture?.startsWith("__free__")
  const selectValue = isFreeInput ? FREE_INPUT_KEY : furniture

  // 공간 유형 or 규모 바뀌면 가구 디폴트값으로 초기화
  useEffect(() => {
    if (spaceType && spaceScale) {
      const defaultKey = Object.keys(FURNITURE_BY_TYPE[spaceType][spaceScale])[0]
      onFurniture(defaultKey)
      setFreeText("")
    }
  }, [spaceType, spaceScale])

  const handleFurnitureChange = (value) => {
    if (value === FREE_INPUT_KEY) {
      setFreeText("")
      onFurniture("__free__")
    } else {
      setFreeText("")
      onFurniture(value)
    }
  }

  const handleFreeText = (value) => {
    setFreeText(value)
    onFurniture(`__free__${value}`)
  }

  const furnitureOptions = spaceType && spaceScale
    ? Object.keys(FURNITURE_BY_TYPE[spaceType][spaceScale])
    : []

  return (
    <div>
      <h2 className={styles.sectionTitle}>01 · 공간 유형</h2>
      <div className={styles.pillGroup}>
        {Object.keys(SPACE_TYPE).map(label => (
          <PillButton
            key={label}
            label={label}
            isActive={spaceType === label}
            onClick={() => onSpaceType(label)}
          />
        ))}
      </div>

      {spaceType && (
        <div className={styles.grid2}>
          <div>
            <label className={styles.fieldLabel}>공간 규모</label>
            <select className={styles.select} value={spaceScale} onChange={e => onSpaceScale(e.target.value)}>
              {Object.keys(SPACE_SCALE_BY_TYPE[spaceType]).map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={styles.fieldLabel}>가구 배치</label>
            <select className={styles.select} value={selectValue} onChange={e => handleFurnitureChange(e.target.value)}>
              {furnitureOptions.map(f => (
                <option key={f}>{f}</option>
              ))}
              <option key={FREE_INPUT_KEY}>{FREE_INPUT_KEY}</option>
            </select>
            {isFreeInput && (
              <input
                className={styles.select}
                style={{ marginTop: "8px" }}
                type="text"
                placeholder="가구 배치를 직접 입력하세요"
                value={freeText}
                onChange={e => handleFreeText(e.target.value)}
              />
            )}
          </div>
        </div>
      )}

      {spaceType && (
        <div style={{ marginTop: "16px" }}>
          <label className={styles.fieldLabel}>추가 요소 (선택)</label>
          <input
            className={styles.select}
            type="text"
            placeholder="예) 실내 조경, 데스크탑, 일하는 사람"
            value={additionalElements}
            onChange={e => onAdditionalElements(e.target.value)}
          />
        </div>
      )}
    </div>
  )
}
