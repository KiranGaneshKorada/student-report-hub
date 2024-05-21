import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface GetByIdProps {
  params: { id: string };
}

export async function PATCH(
  request: NextRequest,
  { params: { id } }: GetByIdProps
) {
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
