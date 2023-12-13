import connectMongoDB from "@/libs/mongobd"
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(request){
    const {customer_id,restaurant_id,order_date,items} = await request.json()
    await connectMongoDB();
    await Order.create({customer_id,restaurant_id,order_date,items})
    
    return NextResponse.json({message:"Order created"},{status:201})
}
export async function GET(){
    await connectMongoDB();
    const orders = await Order.find()
    
    return NextResponse.json({orders})
}


export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Order.findByIdAndDelete(id)
    
    return NextResponse.json({message:"Order deleted"}, {status:200})

}