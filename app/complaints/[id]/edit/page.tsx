import React from "react";
import { notFound } from "next/navigation";
import axios from "axios";
import fetchComplaint from "../fetchComplaint";
import EditComplaint from "./EditComplaint";

interface EditComplaintPageProps {
  params: { id: string };
}

const EditComplaintPage = async ({
  params: { id },
}: EditComplaintPageProps) => {
  const complaint = await fetchComplaint(id);

  if(!complaint){
    console.log("not found")
    notFound();
  }

  

  

  return (
    <>
    <EditComplaint complaint={complaint} id={id}/>
    </>
  );
};

export default EditComplaintPage;
