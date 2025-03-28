"use client"

import { useEffect, useRef } from "react"

export function SeasonalTrendsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Generate data
    const seasons = ["Winter", "Spring", "Summer", "Monsoon", "Autumn"]
    const biomassTypes = [
      { name: "Agricultural Residue", color: "#137b58" },
      { name: "Forestry Waste", color: "#1ea97c" },
      { name: "Energy Crops", color: "#0d5c42" },
    ]

    const data = biomassTypes.map((type) => ({
      ...type,
      values: seasons.map(() => Math.floor(Math.random() * 40) + 10),
    }))

    // Chart dimensions
    const chartWidth = canvas.width - 60
    const chartHeight = canvas.height - 60
    const barWidth = chartWidth / (seasons.length * biomassTypes.length) - 4
    const maxValue = Math.max(...data.flatMap((d) => d.values)) * 1.2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(40, 20)
    ctx.lineTo(40, chartHeight + 30)
    ctx.lineTo(chartWidth + 50, chartHeight + 30)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Draw grid lines
    ctx.beginPath()
    for (let i = 0; i <= 5; i++) {
      const y = chartHeight + 30 - (i * chartHeight) / 5
      ctx.moveTo(35, y)
      ctx.lineTo(chartWidth + 50, y)

      // Add y-axis labels
      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`${Math.round((i * maxValue) / 5)}`, 30, y + 4)
    }
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Draw grouped bars
    seasons.forEach((season, seasonIndex) => {
      const seasonX = 50 + seasonIndex * (chartWidth / seasons.length)

      // Draw season label
      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(season, seasonX + (biomassTypes.length * barWidth) / 2, chartHeight + 45)

      // Draw bars for each biomass type
      data.forEach((biomassType, typeIndex) => {
        const value = biomassType.values[seasonIndex]
        const x = seasonX + typeIndex * barWidth
        const barHeight = (value / maxValue) * chartHeight
        const y = chartHeight + 30 - barHeight

        // Draw bar
        ctx.fillStyle = biomassType.color
        ctx.beginPath()
        ctx.roundRect(x, y, barWidth - 2, barHeight, 2)
        ctx.fill()
      })
    })

    // Add legend
    const legendX = canvas.width - 150
    const legendY = 30

    biomassTypes.forEach((type, index) => {
      const y = legendY + index * 20

      // Draw color box
      ctx.fillStyle = type.color
      ctx.fillRect(legendX, y, 12, 12)

      // Draw label
      ctx.fillStyle = "#334155"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(type.name, legendX + 20, y + 6)
    })

    // Add title
    ctx.fillStyle = "#334155"
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Seasonal Biomass Availability", 40, 15)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

