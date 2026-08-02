import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const order = await Order.create({
      customer: body.customer,
      shippingAddress: body.shippingAddress,
      items: body.items,
      totalAmount: body.totalAmount,
      paymentStatus: "pending",
      fulfillmentStatus: "processing",
    });

    return NextResponse.json({ order }, { status: 201 });
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json({ orders });
  } catch (error) {
    console.error("GET /api/orders error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}