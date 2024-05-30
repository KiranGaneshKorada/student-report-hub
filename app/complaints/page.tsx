import prisma from "@/prisma/client";
import React from "react";
import CreateIssueButton from "./CreateIssueButton";
import ComplaintsTable from "./ComplaintsTable";
import { notFound } from "next/navigation";

const page = async () => {

  var complaints;

  try {
     complaints = await prisma.complaint.findMany();

  } catch (error) {
     notFound();
  }

  
  
  return (
    <div className="p-3">
      <div>
        <CreateIssueButton/>
      </div>
      <div>
        <ComplaintsTable complaints={complaints}/>
      </div>
    </div>
  );
};

export const dynamic='force-dynamic';

export default page;
