import connectMongoDB from "@/libs/mongobd"
import Restaurant from "@/models/restaurant";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,address,cuisine,menu} = await request.json()
    await connectMongoDB();
    await Restaurant.create({name,address,cuisine,menu})
    
    return NextResponse.json({message:"Restaurant created"},{status:201})
}
export async function GET(){
    await connectMongoDB();
    const restaurants = await Restaurant.find()
    
    return NextResponse.json({restaurants})
}

