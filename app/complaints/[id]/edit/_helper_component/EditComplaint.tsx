'use client'
import React from "react";
import ComplaintFormPage from "../../_helper_components/ComplaintForm";
import axios from "axios";
import { ComplaintSchema } from "../../_helper_components/ComplaintsTable";

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
