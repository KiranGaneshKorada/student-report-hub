import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newComplaint = await prisma.complaint.create({
    data: {
      title: body.title,
      description: body.description,
      location: body.location,
      category: body.category,
      urgency: body.urgency,
    },
  });

  return NextResponse.json(newComplaint, { status: 201 });
}
