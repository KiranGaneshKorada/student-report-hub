import Link from "next/link";
import React from "react";

const CreateIssueButton = () => {
  return (
    <button className="justify-center py-3 px-4 w-full inline-flex  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-400 ">
      <Link href="/complaints/create" >Report A Complaint</Link>
    </button>
  );
};

export default CreateIssueButton;
