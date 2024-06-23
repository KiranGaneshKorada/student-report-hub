'use client'
import React from "react";
import axios from "axios";
import { ComplaintSchema } from "@/app/complaints/_helper_components/ComplaintsTable";
import ComplaintFormPage from "@/app/complaints/_helper_components/ComplaintForm";

interface EditComplaintPageProps {
  complaint: ComplaintSchema;
  id:string;
}

const EditComplaint =  ({
  complaint,id
}: EditComplaintPageProps) => {
  

  const onHandleFormSubmission = (data: ComplaintSchema) => {
    axios.patch(`/api/complaints/${id}`, data);
  };

  return (
    <>
      <ComplaintFormPage
        onHandleFormSubmission={onHandleFormSubmission}
        complaint={complaint}
      />
    </>
  );
};

export default EditComplaint;
