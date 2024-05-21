import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import fetchComplaint from "./fetchComplaint";

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: IssueDetailPageProps) => {
  const complaint = await fetchComplaint(id);

  
  if (!complaint) {
    notFound();
  }
  return (
    <div>
      <p>{complaint.title}</p>
      <p>{complaint.category}</p>
      <p>{complaint.description}</p>
      <p>{complaint.location}</p>
      <p>{complaint.urgency}</p>
      <p>{complaint.status}</p>
      <button className="m-3 p-3 bg-blue-500 text-white"><Link href={`/complaints/${complaint.id}/edit`}>Edit</Link></button>
    </div>
  );
};

export default IssueDetailPage;
