import Link from "next/link";
import React from "react";

const CreateIssueButton = () => {
  return (
    <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 ">
      <Link href="/complaints/create">Report A Complaint</Link>
    </button>
  );
};

export default CreateIssueButton;
