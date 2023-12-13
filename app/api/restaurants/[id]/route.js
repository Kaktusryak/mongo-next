import connectMongoDB from "@/libs/mongobd"
import Restaurant from "@/models/restaurant";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    
    const {id} = params
    await connectMongoDB();
    
    const restaurant = await Restaurant.findOne({_id:id})
    
    return NextResponse.json({restaurant})
}