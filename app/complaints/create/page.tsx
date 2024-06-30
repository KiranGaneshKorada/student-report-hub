'use client'
import axios from "axios";
import ComplaintFormPage from "../_helper_components/ComplaintForm";
import { ComplaintSchema } from "../_helper_components/ComplaintsTable";
import { useRouter } from "next/navigation";

const CreateComplaintsPage = () => {
  const router = useRouter();

  
  const onHandleFormSubmission = async (data: ComplaintSchema) => {
    try {
      await axios.post("/api/complaints", data);
      router.push("/");
    } catch (error) {}
  };
  return <ComplaintFormPage onHandleFormSubmission={onHandleFormSubmission}/>;
};

export default CreateComplaintsPage;
