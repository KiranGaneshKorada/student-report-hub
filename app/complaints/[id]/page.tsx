"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import fetchComplaint from "./_helper_components/fetchComplaint";
import DeleteComplaintButton from "./_helper_components/DeleteComplaintButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ComplaintSchema } from "../_helper_components/ComplaintsTable";
import { useSession } from "next-auth/react";

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage = ({ params: { id } }: IssueDetailPageProps) => {
  const {
    data: complaint,
    error,
    isLoading,
  } = useQuery<ComplaintSchema>({
    queryKey: ["complaint"],
    queryFn: () =>
      axios.get("/api/complaints/" + id).then((response) => response.data),
    retry: 3,
  });

  const { data } = useSession();

  return (
    <div>
      <p>{complaint?.title}</p>
      <p>{complaint?.category}</p>
      <p>{complaint?.description}</p>
      <p>{complaint?.location}</p>
      <p>{complaint?.urgency}</p>
      <p>{complaint?.status}</p>
      <p>{complaint?.userEmailId}</p>
      {data?.user?.email === complaint?.userEmailId && (
        <>
          <button className="m-3 p-3 bg-blue-500 text-white">
            <Link href={`/complaints/${complaint?.id}/edit`}>Edit</Link>
          </button>
          <DeleteComplaintButton id={id} />
        </>
      )}
    </div>
  );
};

export default IssueDetailPage;
