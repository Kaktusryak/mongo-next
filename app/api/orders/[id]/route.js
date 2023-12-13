import connectMongoDB from "@/libs/mongobd"
import Order from "@/models/order"
import { NextResponse } from "next/server"


export async function PUT(request,{params}){
    const {id} = params
    const {customer_id,restaurant_id,order_date,items} = await request.json()
    console.log(customer_id)
    await connectMongoDB()
    await Order.findByIdAndUpdate(id,{customer_id:customer_id,restaurant_id:restaurant_id,order_date:order_date,items:items})
    
    return NextResponse.json({message:"Order updated"},{status:200})
}

export async function GET(request,{params}){
    
    const {id} = params
    await connectMongoDB();
    
    const order = await Order.findOne({_id:id})
    
    return NextResponse.json({order})
}