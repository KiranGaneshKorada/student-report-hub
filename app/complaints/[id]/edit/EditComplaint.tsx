'use client'
import React from "react";
import ComplaintFormPage from "../../_components/ComplaintForm";
import axios from "axios";
import { ComplaintSchema } from "../../ComplaintsTable";

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
