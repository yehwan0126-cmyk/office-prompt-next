"use client"

import { useState } from "react"
import { SPACE_TYPE, SPACE_SCALE_BY_TYPE, ACCENT_STYLE, MATERIALS_BY_ACCENT, FURNITURE_BY_TYPE, COLOR_TEMP_STEPS, SYSTEM_DEFAULTS, SYSTEM_DEFAULTS_STYLE_TRANSFER, TASK_OPTIONS } from "@/data/options"
import { supabase } from "@/lib/supabase"
import styles from "./PromptGenerator.module.css"

export default function OutputPanel({ spaceType, spaceScale, furniture, accentStyle, floor, ceiling, wall, partition, ctIdx, onSave }) {
  const [finalPrompt, setFinalPrompt] = useState("")
  const [copied, setCopied]           = useState(false)
  const [loading, setLoading]         = useState(false)
  const [error, setError]             = useState("")
  const [saved, setSaved]             = useState(false)
  const [selectedTask, setSelectedTask] = useState(TASK_OPTIONS[0].value)

  const buildJSON = () => {
    const ct   = COLOR_TEMP_STEPS[ctIdx]
    const mats = MATERIALS_BY_ACCENT[accentStyle]
    const isStyleTransfer = selectedTask === "image-style-transfer"
    return {
      input: {
        task: selectedTask,
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
      system_defaults: isStyleTransfer ? SYSTEM_DEFAULTS_STYLE_TRANSFER : SYSTEM_DEFAULTS,
    }
  }

  const generatePrompt = async () => {
    setLoading(true)
    setError("")
    setFinalPrompt("")
    setSaved(false)

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promptData: buildJSON() }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "오류가 발생했어요")
      
      setFinalPrompt(data.prompt)

      // Supabase에 저장
      const { data: saved, error: saveError } = await supabase
        .from("prompt_history")
        .insert([{
          options: { spaceType, spaceScale, furniture, accentStyle, floor, ceiling, wall, partition, ctIdx },
          prompt_en: data.prompt,
        }])
        .select()
        .single()

      if (!saveError) {
        setSaved(true)
        onSave?.(saved) // 부모(PromptGenerator)에게 새 항목 전달
      }

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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
        <h2 className={styles.sectionTitle}>✨ AI 텍스트 프롬프트</h2>
        <button
          className={styles.btnPrimary}
          onClick={generatePrompt}
          disabled={loading}
        >
          {loading ? "⏳ 생성 중..." : "🚀 AI 프롬프트 생성 (Gemini)"}
        </button>

        {error && (
          <p style={{ color: "#dc2626", fontSize: "13px", marginBottom: "12px" }}>
            ⚠️ {error}
          </p>
        )}

        {finalPrompt && (
          <>
            <pre className={styles.pre}>{finalPrompt}</pre>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                className={`${styles.btnCopy} ${copied ? styles.btnCopied : ""}`}
                onClick={() => handleCopy(finalPrompt)}
              >
                {copied ? "✅ 복사 완료!" : "텍스트 복사"}
              </button>
              {saved && (
                <span style={{ fontSize: "13px", color: "#16a34a" }}>
                  ✅ 히스토리에 저장됨
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
