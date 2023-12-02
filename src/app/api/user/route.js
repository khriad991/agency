import {NextResponse} from "next/server";

export async function GET(req,res){


    return NextResponse.json({message:"success ",data:{name:"kamrul hasan", age:19, address:"ukhia"}})
}