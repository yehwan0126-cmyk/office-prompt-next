"use client"

export default function PillButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        margin: "4px",
        borderRadius: "8px",
        border: isActive ? "2px solid #5B4FE8" : "2px solid #E2E0D8",
        background: isActive ? "#5B4FE8" : "#ffffff",
        color: isActive ? "white" : "#1A1A1A",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: isActive ? "600" : "400",
        transition: "all 0.15s ease",
      }}
    >
      {label}
    </button>
  )
}
