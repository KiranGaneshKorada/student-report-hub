'use client'
import React from "react";
import { notFound, useRouter } from "next/navigation";
import axios from "axios";
import fetchComplaint from "../fetchComplaint";
import EditComplaint from "./EditComplaint";
import { ComplaintSchema } from "../../ComplaintsTable";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface EditComplaintPageProps {
  params: { id: string };
}

const EditComplaintPage = async ({
  params: { id },
}: EditComplaintPageProps) => {
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

  const {data}=useSession();


  if(data?.user?.email!=complaint?.userEmailId){
    const router = useRouter();
    router.push("/complaints/"+id)

  }
  

  

  

  return (complaint &&
    <>
    <EditComplaint complaint={complaint} id={id}/>
    </>
  );
};

export default EditComplaintPage;
