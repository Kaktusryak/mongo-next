import connectMongoDB from "@/libs/mongobd"
import Customer from "@/models/customer";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,email,phone} = await request.json()
    await connectMongoDB();
    await Customer.create({name,email,phone})
    
    return NextResponse.json({message:"Customer created"},{status:201})
}
export async function GET(){
    await connectMongoDB();
    const customers = await Customer.find()
    
    return NextResponse.json({customers})
}