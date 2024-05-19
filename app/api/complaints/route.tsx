import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createComplaintSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  location: z.string().min(1),
  category: z.string(),
  urgency: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createComplaintSchema.safeParse(body);
  console.log(body)
  console.log(validation.error + "  ddd")
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

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
