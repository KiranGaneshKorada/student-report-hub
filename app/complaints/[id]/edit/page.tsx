"use client";
import React from "react";
import { notFound, useRouter } from "next/navigation";
import axios from "axios";
import { ComplaintSchema } from "../../_helper_components/ComplaintsTable";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import ComplaintFormPage from "../../_helper_components/ComplaintForm";

interface EditComplaintPageProps {
  params: { id: string };
}

const EditComplaintPage = ({ params: { id } }: EditComplaintPageProps) => {
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

  const router = useRouter();
  const { data } = useSession();

  if (data?.user?.email != complaint?.userEmailId) {
    router.push("/complaints/" + id);
  }
  const onHandleFormSubmission = (data: ComplaintSchema) => {
    axios.patch(`/api/complaints/${id}`, data);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center p-5">
        <div className="space-y-3 w-full max-w-2xl p-5 bg-white shadow-lg rounded-lg animate-pulse">
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Title</label>
            <div className="py-3 px-4 w-full border border-gray-200 rounded-lg bg-gray-200"></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Category</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Location</label>
            <div
              className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
              style={{ height: "72px" }}
            ></div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium mb-2">
              Description
            </label>
            <div
              className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
              style={{ height: "120px" }}
            ></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Urgency</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Status</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>
        </div>


        <div className="flex space-x-3 mt-5">
          <div className="py-3 px-5 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!complaint || error) {
    notFound();
  }

  return (
    complaint && (
      <>
        <ComplaintFormPage
          onHandleFormSubmission={onHandleFormSubmission}
          complaint={complaint}
        />
      </>
    )
  );
};

export default EditComplaintPage;
