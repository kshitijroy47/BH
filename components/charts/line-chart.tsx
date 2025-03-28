"use client"

import { useEffect, useRef } from "react"

export function LineChartComponent() {
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
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentYear = new Date().getFullYear()

    const data = {
      [currentYear]: months.map(() => Math.floor(Math.random() * 80) + 20),
      [currentYear - 1]: months.map(() => Math.floor(Math.random() * 70) + 10),
    }

    // Chart dimensions
    const chartWidth = canvas.width - 60
    const chartHeight = canvas.height - 60
    const maxValue = Math.max(...Object.values(data).flat()) * 1.2

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

    // Draw x-axis labels
    months.forEach((month, index) => {
      const x = 50 + index * (chartWidth / (months.length - 1))

      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(month, x, chartHeight + 45)
    })

    // Draw lines
    Object.entries(data).forEach(([year, yearData], yearIndex) => {
      ctx.beginPath()

      yearData.forEach((value, index) => {
        const x = 50 + index * (chartWidth / (months.length - 1))
        const y = chartHeight + 30 - (value / maxValue) * chartHeight

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.strokeStyle = yearIndex === 0 ? "#137b58" : "#94a3b8"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw points
      yearData.forEach((value, index) => {
        const x = 50 + index * (chartWidth / (months.length - 1))
        const y = chartHeight + 30 - (value / maxValue) * chartHeight

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = yearIndex === 0 ? "#137b58" : "#94a3b8"
        ctx.fill()
      })
    })

    // Add legend
    const legendX = 50
    const legendY = 20

    // Current year
    ctx.beginPath()
    ctx.rect(legendX, legendY, 15, 2)
    ctx.fillStyle = "#137b58"
    ctx.fill()

    ctx.fillStyle = "#334155"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText(currentYear.toString(), legendX + 25, legendY + 5)

    // Previous year
    ctx.beginPath()
    ctx.rect(legendX + 80, legendY, 15, 2)
    ctx.fillStyle = "#94a3b8"
    ctx.fill()

    ctx.fillStyle = "#334155"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText((currentYear - 1).toString(), legendX + 105, legendY + 5)

    // Add title
    ctx.fillStyle = "#334155"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Yearly Biomass Procurement (tons)", canvas.width / 2, 15)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

