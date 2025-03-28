"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  date: string
  biomassType: string
  quantity: string
  deliveryLocation: string
  deliveryDate: string
  price: string
  status: string
}

export function OrderHistory({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="text-muted-foreground mb-2">No orders found</p>
        <p className="text-sm text-muted-foreground">Your order history will appear here once you place an order.</p>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Biomass Type</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Delivery Location</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
            <TableCell>{order.biomassType}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.deliveryLocation}</TableCell>
            <TableCell>{order.price}</TableCell>
            <TableCell>
              <Badge
                variant={order.status === "Completed" ? "default" : "outline"}
                className={order.status === "Processing" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : ""}
              >
                {order.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

