"use client"

import PillButton from "./PillButton"
import { SPACE_TYPE, SPACE_SCALE_BY_TYPE, FURNITURE_BY_TYPE } from "@/data/options"
import styles from "./PromptGenerator.module.css"

export default function SpaceSection({ spaceType, spaceScale, furniture, onSpaceType, onSpaceScale, onFurniture }) {
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
            <select className={styles.select} value={furniture} onChange={e => onFurniture(e.target.value)}>
              {Object.keys(FURNITURE_BY_TYPE[spaceType]).map(f => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
