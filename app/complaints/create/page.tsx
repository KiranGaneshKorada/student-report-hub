'use client'
import axios from "axios";
import ComplaintFormPage from "../_components/ComplaintForm";
import router from "next/router";
import { ComplaintSchema } from "../ComplaintsTable";

const CreateComplaintsPage = () => {
  const onHandleFormSubmission = async (data: ComplaintSchema) => {
    await axios.post("/api/complaints", data);
  };
  return <ComplaintFormPage onHandleFormSubmission={onHandleFormSubmission}/>;
};

export default CreateComplaintsPage;
