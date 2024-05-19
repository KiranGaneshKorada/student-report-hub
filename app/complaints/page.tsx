import prisma from "@/prisma/client";
import React from "react";
import CreateIssueButton from "./CreateIssueButton";
import ComplaintsTable from "./ComplaintsTable";

const page = async () => {
  
  const complaints = await prisma.complaint.findMany();
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

export default page;
