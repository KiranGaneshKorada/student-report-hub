import React from "react";
import ComplaintFormPage from "../../_components/ComplaintForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface EditComplaintPageProps {
  params: { id: string };
}

const EditComplaintPage = async({ params: { id } }: EditComplaintPageProps) => {
    const complaint = await prisma.complaint.findUnique({
        where: { id: parseInt(id) },
      });

      if(!complaint){
        notFound();
      }
  return (
    <>
      <ComplaintFormPage complaint={complaint}/>
    </>
  );
};

export default EditComplaintPage;
