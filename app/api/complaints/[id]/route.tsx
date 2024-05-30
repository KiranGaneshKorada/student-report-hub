import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface GetByIdProps {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params: { id } }: GetByIdProps
) {
  const complaint = await prisma.complaint.findUnique({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(complaint);
}

export async function PATCH(
  request: NextRequest,
  { params: { id } }: GetByIdProps
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }
  const body = await request.json();

  const updatedComplaint = await prisma.complaint.update({
    where: { id: parseInt(id) },
    data: {
      title: body.title,
      description: body.description,
      location: body.location,
      category: body.category,
      urgency: body.urgency,
    },
  });

  return NextResponse.json(updatedComplaint);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: GetByIdProps
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }
  await prisma.complaint.delete({ where: { id: parseInt(id) } });

  return NextResponse.json({});
}
