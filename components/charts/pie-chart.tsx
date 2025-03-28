"use client"

import { useEffect, useRef } from "react"

export function PieChartComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Generate random data
    const biomassTypes = ["Agricultural Residue", "Forestry Waste", "Energy Crops", "Food Waste", "Animal Waste"]

    const data = biomassTypes.map(() => Math.floor(Math.random() * 30) + 10)
    const total = data.reduce((acc, val) => acc + val, 0)

    // Colors
    const colors = [
      "#137b58", // Primary
      "#1ea97c", // Lighter
      "#0d5c42", // Darker
      "#25c793", // Even lighter
      "#0a4632", // Even darker
    ]

    // Chart dimensions
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 60

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw title
    ctx.fillStyle = "#334155"
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Biomass Type Distribution", centerX, 20)

    // Draw pie chart
    let startAngle = 0
    data.forEach((value, index) => {
      const sliceAngle = (2 * Math.PI * value) / total

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      // Draw slice label
      const labelAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + labelRadius * Math.cos(labelAngle)
      const labelY = centerY + labelRadius * Math.sin(labelAngle)

      const percent = Math.round((value / total) * 100)
      if (percent > 5) {
        // Only show label if slice is big enough
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`${percent}%`, labelX, labelY)
      }

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = canvas.width - 150
    const legendY = 50

    biomassTypes.forEach((type, index) => {
      const y = legendY + index * 25

      // Draw color box
      ctx.fillStyle = colors[index % colors.length]
      ctx.fillRect(legendX, y, 15, 15)

      // Draw label
      ctx.fillStyle = "#334155"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(type, legendX + 25, y + 7.5)
    })
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

