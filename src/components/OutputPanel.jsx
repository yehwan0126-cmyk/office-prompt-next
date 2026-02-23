"use client"

import { useState } from "react"
import { SPACE_TYPE, SPACE_SCALE_BY_TYPE, ACCENT_STYLE, MATERIALS_BY_ACCENT, FURNITURE_BY_TYPE, COLOR_TEMP_STEPS, SYSTEM_DEFAULTS } from "@/data/options"
import styles from "./PromptGenerator.module.css"

export default function OutputPanel({ spaceType, spaceScale, furniture, accentStyle, floor, ceiling, wall, partition, ctIdx }) {
  const [finalPrompt, setFinalPrompt] = useState("")
  const [copied, setCopied]           = useState(false)

  const buildJSON = () => {
    const ct   = COLOR_TEMP_STEPS[ctIdx]
    const mats = MATERIALS_BY_ACCENT[accentStyle]
    return {
      input: {
        task: "photorealistic_architectural_visualization",
        space: {
          type:  SPACE_TYPE[spaceType],
          scale: SPACE_SCALE_BY_TYPE[spaceType][spaceScale],
        },
        style: {
          base_style:   "modern_commercial_office",
          accent_style: ACCENT_STYLE[accentStyle],
        },
        materials: {
          floor:     mats.floor[floor],
          ceiling:   mats.ceiling[ceiling],
          wall:      mats.wall[wall],
          partition: mats.partition[partition],
        },
        lighting: {
          color_temperature_range: ct.range,
          color_temperature_k:     ct.k,
          description:             ct.json,
        },
        furniture_configuration: FURNITURE_BY_TYPE[spaceType][furniture],
      },
      system_defaults: SYSTEM_DEFAULTS,
    }
  }

  const generatePrompt = () => {
    const json = buildJSON()
    const inp  = json.input
    setFinalPrompt(
      `Photorealistic architectural visualization of a ${inp.space.scale} ${inp.space.type} interior. ` +
      `Style: ${inp.style.base_style} with ${inp.style.accent_style} accents. ` +
      `Materials: ${inp.materials.floor} floor, ${inp.materials.ceiling} ceiling, ${inp.materials.wall} walls, ${inp.materials.partition} partitions. ` +
      `Lighting: ${inp.lighting.description}. Furniture: ${inp.furniture_configuration}. ` +
      `Eye-level perspective, wide 24-28mm lens, no people, no text overlay, photorealistic render, minimal post-processing, strict geometry.`
    )
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const json    = buildJSON()
  const jsonStr = JSON.stringify(json, null, 2)

  return (
    <div>
      {/* JSON 출력 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>📄 JSON 프롬프트</h2>
        <pre className={styles.pre}>{jsonStr}</pre>
        <button
          className={`${styles.btnCopy} ${copied ? styles.btnCopied : ""}`}
          onClick={() => handleCopy(jsonStr)}
        >
          {copied ? "✅ 복사 완료!" : "JSON 복사"}
        </button>
      </div>

      {/* 텍스트 프롬프트 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>✨ 텍스트 프롬프트</h2>
        <button className={styles.btnPrimary} onClick={generatePrompt}>
          🚀 프롬프트 생성
        </button>
        {finalPrompt && (
          <>
            <pre className={styles.pre}>{finalPrompt}</pre>
            <button
              className={`${styles.btnCopy} ${copied ? styles.btnCopied : ""}`}
              onClick={() => handleCopy(finalPrompt)}
            >
              {copied ? "✅ 복사 완료!" : "텍스트 복사"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
