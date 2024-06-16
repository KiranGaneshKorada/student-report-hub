import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { Status, Urgency } from "@prisma/client";

export async function GET(request: NextRequest) {
  type StatusKey = keyof typeof Status;
  type UrgencyKey = keyof typeof Urgency;
  const statusParam = request.nextUrl.searchParams.get("status");
  const urgencyParam = request.nextUrl.searchParams.get("urgency");

  const where: { status?: StatusKey; urgency?: UrgencyKey } = {};

  if (statusParam) {
    const status = Status[statusParam as StatusKey];
    where.status = status;
  }

  if (urgencyParam) {
    const urgency = Urgency[urgencyParam as UrgencyKey];
    where.urgency = urgency;
  }

  const complaints = await prisma.complaint.findMany({ where: where });
  console.log(complaints)
  return NextResponse.json(complaints, { status: 201 });
}





export async function POST(request: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }
  const body = await request.json();

  const newComplaint = await prisma.complaint.create({
    data: {
      title: body.title,
      description: body.description,
      location: body.location,
      category: body.category,
      urgency: body.urgency,
      userEmailId: body.userEmailId,
    },
  });

  return NextResponse.json(newComplaint, { status: 201 });
}
