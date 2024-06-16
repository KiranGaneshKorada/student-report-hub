import prisma from "@/prisma/client";

export default async function fetchComplaint(id: string) {
  try {
    const complaint = await prisma.complaint.findUnique({
      where: { id: parseInt(id) },
    });
    return complaint;
  } catch (error) {
    return null;
  }
}
