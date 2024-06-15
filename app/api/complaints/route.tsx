import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

export async function GET(request:NextRequest){
  // console.log(request)
  const complaints=await prisma.complaint.findMany()
  // console.log(complaints)
  return NextResponse.json(complaints,{status:201});
}

export async function POST(request: NextRequest) {
  const session=await getServerSession();
  if(!session){
    return NextResponse.json({},{status:401})
  }
  const body = await request.json();

  const newComplaint = await prisma.complaint.create({
    data: {
      title: body.title,
      description: body.description,
      location: body.location,
      category: body.category,
      urgency: body.urgency,
      userEmailId:body.userEmailId,
    },
  });

  return NextResponse.json(newComplaint, { status: 201 });
}
