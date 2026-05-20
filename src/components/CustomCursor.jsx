import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dot, setDot] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", leave)

    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => setHovered(true))
        el.addEventListener("mouseleave", () => setHovered(false))
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => setHovered(true))
      el.addEventListener("mouseleave", () => setHovered(false))
    })

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let frame
    const animate = () => {
      setDot(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  if (!visible) return null

  return (
    <>
      {/* Küçük nokta - butona gelince kaybolur */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: hovered ? 0 : 8,
          height: hovered ? 0 : 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8b6bbf, #c4788e)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.25s, height 0.25s",
        }}
      />
      {/* Büyük daire - gradient border */}
      <div
        style={{
          position: "fixed",
          left: dot.x - 20,
          top: dot.y - 20,
          width: hovered ? 50 : 40,
          height: hovered ? 50 : 40,
          borderRadius: "50%",
          background: hovered 
            ? "rgba(139,107,191,0.08)" 
            : "transparent",
          border: "1.5px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: hovered ? "0 0 0 1.5px #8b6bbf" : "0 0 0 1.5px #c4788e",
          opacity: 0.7,
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.3s, height 0.3s, box-shadow 0.3s",
        }}
      />
    </>
  )
}