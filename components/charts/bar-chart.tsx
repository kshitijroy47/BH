"use client"

import { useEffect, useRef } from "react"

export function BarChartComponent() {
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
    const data = months.map(() => Math.floor(Math.random() * 50) + 10)

    // Chart dimensions
    const chartWidth = canvas.width - 60
    const chartHeight = canvas.height - 60
    const barWidth = chartWidth / data.length - 10
    const maxValue = Math.max(...data) * 1.2

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

    // Draw bars
    data.forEach((value, index) => {
      const x = 50 + index * (barWidth + 10)
      const barHeight = (value / maxValue) * chartHeight
      const y = chartHeight + 30 - barHeight

      // Draw bar
      const gradient = ctx.createLinearGradient(x, y, x, chartHeight + 30)
      gradient.addColorStop(0, "#137b58")
      gradient.addColorStop(1, "#137b5880")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, 4)
      ctx.fill()

      // Add x-axis labels
      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(months[index], x + barWidth / 2, chartHeight + 45)
    })

    // Add title
    ctx.fillStyle = "#334155"
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Monthly Biomass Orders (tons)", 40, 15)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

