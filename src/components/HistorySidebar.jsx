"use client"

import styles from "./HistorySidebar.module.css"

export default function HistorySidebar({ history, loading, onSelect, onDelete }) {
  const formatDate = (iso) => {
    const d = new Date(iso)
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const dd = String(d.getDate()).padStart(2, "0")
    const hh = String(d.getHours()).padStart(2, "0")
    const min = String(d.getMinutes()).padStart(2, "0")
    return `${mm}/${dd} ${hh}:${min}`
  }

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>🕘 히스토리</h2>

      {loading && <p className={styles.empty}>불러오는 중...</p>}

      {!loading && history.length === 0 && (
        <p className={styles.empty}>저장된 프롬프트가 없어요.</p>
      )}

      <ul className={styles.list}>
        {history.map((item) => (
          <li key={item.id} className={styles.item}>
            <button className={styles.selectBtn} onClick={() => onSelect(item)}>
              <span className={styles.date}>{formatDate(item.created_at)}</span>
              <p className={styles.preview}>
                {item.options?.spaceType} · {item.options?.accentStyle}
              </p>
              <p className={styles.promptPreview}>
                {item.prompt_en.slice(0, 60)}...
              </p>
            </button>
            <button className={styles.deleteBtn} onClick={() => onDelete(item.id)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
