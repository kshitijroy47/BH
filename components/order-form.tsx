"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const biomassTypes = [
  "Agricultural Residue",
  "Forestry Waste",
  "Energy Crops",
  "Food Waste",
  "Animal Waste",
  "Municipal Solid Waste",
  "Algae",
]

// Remove the Card wrapper since it's now in a Dialog
export function OrderForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (order: any) => void
  onCancel: () => void
}) {
  const [biomassType, setBiomassType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("tons")
  const [deliveryLocation, setDeliveryLocation] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Create order object
    const order = {
      biomassType,
      quantity: `${quantity} ${unit}`,
      deliveryLocation,
      deliveryDate,
      price: `₹${(Number.parseFloat(quantity || "0") * 25).toFixed(2)}`, // Dummy price calculation
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onSubmit(order)
    }, 1000)
  }

  const filteredBiomassTypes = biomassTypes.filter((type) => type.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <div className="space-y-2 mb-4">
        <h2 className="text-xl font-semibold text-[#137b58]">Place New Order</h2>
        <p className="text-sm text-muted-foreground">Fill in the details to place a new biomass order</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search Biomass</Label>
          <Input
            id="search"
            placeholder="Search for biomass types..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="biomassType">Type of Biomass</Label>
          <Select value={biomassType} onValueChange={setBiomassType} required>
            <SelectTrigger id="biomassType">
              <SelectValue placeholder="Select biomass type" />
            </SelectTrigger>
            <SelectContent>
              {filteredBiomassTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unit">Unit</Label>
            <Select value={unit} onValueChange={setUnit}>
              <SelectTrigger id="unit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tons">Tons</SelectItem>
                <SelectItem value="kg">Kilograms</SelectItem>
                <SelectItem value="cubic-meters">Cubic Meters</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliveryLocation">Delivery Location</Label>
          <Input
            id="deliveryLocation"
            placeholder="Enter delivery address"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliveryDate">Delivery Date</Label>
          <Input
            id="deliveryDate"
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>

        <div className="pt-2 flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading} style={{ backgroundColor: "#137b58" }}>
            {isLoading ? "Processing..." : "Place Order"}
          </Button>
        </div>
      </form>
    </>
  )
}

