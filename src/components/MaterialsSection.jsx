"use client"

import PillButton from "./PillButton"
import { ACCENT_STYLE, MATERIALS_BY_ACCENT, COLOR_TEMP_STEPS } from "@/data/options"
import styles from "./PromptGenerator.module.css"

export default function MaterialsSection({ accentStyle, floor, ceiling, wall, partition, ctIdx, onAccentStyle, onFloor, onCeiling, onWall, onPartition, onCtIdx }) {
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
            {[
              { label: "바닥재", value: floor,     setter: onFloor,     key: "floor"     },
              { label: "천장",   value: ceiling,   setter: onCeiling,   key: "ceiling"   },
              { label: "벽",     value: wall,       setter: onWall,      key: "wall"      },
              { label: "파티션", value: partition,  setter: onPartition, key: "partition" },
            ].map(({ label, value, setter, key }) => (
              <div key={key}>
                <label className={styles.fieldLabel}>{label}</label>
                <select className={styles.select} value={value} onChange={e => setter(e.target.value)}>
                  {Object.keys(MATERIALS_BY_ACCENT[accentStyle][key]).map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 조명 */}
      {accentStyle && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>04 · 조명 색온도</h2>
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
        </div>
      )}
    </div>
  )
}
