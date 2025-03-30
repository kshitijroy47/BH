"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Package, TrendingUp, Users } from "lucide-react"
import { OrderForm } from "./order-form"
import { OrderHistory } from "./order-history"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Add these imports at the top of the file
import { BarChartComponent } from "./charts/bar-chart"
import { PieChartComponent } from "./charts/pie-chart"
import { LineChartComponent } from "./charts/line-chart"
import { SeasonalTrendsChart } from "./charts/seasonal-trends"

export function Dashboard({ userName = "User" }: { userName?: string }) {
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orders, setOrders] = useState<any[]>([])

  const handleAddOrder = (order: any) => {
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toISOString(),
      status: "Processing",
      ...order,
    }
    setOrders([newOrder, ...orders])
    setShowOrderForm(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-[#137b58]">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={() => setShowOrderForm(true)} style={{ backgroundColor: "#137b58" }}>
            Add Order
          </Button>
        </div>
      </div>

      {/* Replace inline form with Dialog */}
      <Dialog open={showOrderForm} onOpenChange={setShowOrderForm}>
        <DialogContent className="sm:max-w-[600px]">
          <OrderForm onSubmit={handleAddOrder} onCancel={() => setShowOrderForm(false)} />
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <Package className="h-4 w-4 text-[#137b58]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{orders.length || 28}</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Carbon Emission Reduced</CardTitle>
                <TrendingUp className="h-4 w-4 text-[#137b58]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{(Math.random() * 100 + 4000).toFixed(2)} MTCO2</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
                <Activity className="h-4 w-4 text-[#137b58]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.floor(Math.random() * 20 + 10)}</div>
                <p className="text-xs text-muted-foreground">+7% from last month</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Biomass Suppliers</CardTitle>
                <Users className="h-4 w-4 text-[#137b58]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.floor(Math.random() * 200 + 500)}</div>
                <p className="text-xs text-muted-foreground">+201 since last year</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Monthly Orders</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                  <BarChartComponent />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Biomass Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                  <PieChartComponent />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Recent Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#137b58]/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-[#137b58]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {["Green Harvest Co.", "EcoBiomass Ltd.", "AgriWaste Solutions", "ForestFuel Inc."][i]}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {["Agricultural Residue", "Forestry Waste", "Energy Crops", "Municipal Solid Waste"][i]} •{" "}
                          {Math.floor(Math.random() * 100 + 50)} tons
                        </p>
                      </div>
                      <div className="ml-auto text-sm font-medium">₹{(Math.random() * 10000 + 5000).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Delivery Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full relative rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Map"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium">Top delivery regions</p>
                    <p className="text-xs">Maharashtra, Karnataka, Gujarat, Punjab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#137b58]">Yearly Performance</CardTitle>
              <CardDescription>Track your biomass procurement trends over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[400px] w-full">
                <LineChartComponent />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Biomass Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Moisture Content", "Ash Content", "Energy Value", "Bulk Density"].map((metric, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{metric}</p>
                        <p className="text-sm font-medium">
                          {metric === "Energy Value"
                            ? `${(Math.random() * 5 + 15).toFixed(1)} MJ/kg`
                            : metric === "Bulk Density"
                              ? `${(Math.random() * 200 + 100).toFixed(0)} kg/m³`
                              : `${(Math.random() * 20).toFixed(1)}%`}
                        </p>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-[#137b58]" style={{ width: `${Math.random() * 60 + 40}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#137b58]">Seasonal Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <SeasonalTrendsChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-[#137b58]">Order History</CardTitle>
              <CardDescription>View and manage your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              <OrderHistory orders={orders} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

