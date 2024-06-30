'use client'
import React from "react";
import { notFound, useRouter } from "next/navigation";
import axios from "axios";
import { ComplaintSchema } from "../../_helper_components/ComplaintsTable";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import EditComplaint from "./_helper_component/EditComplaint";

interface EditComplaintPageProps {
  params: { id: string };
}

const EditComplaintPage =  ({
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

  const router = useRouter();


  const {data}=useSession();


  if(data?.user?.email!=complaint?.userEmailId){
    router.push("/complaints/"+id)

  }
  

  

  

  return (complaint &&
    <>
    <EditComplaint complaint={complaint} id={id}/>
    </>
  );
};

export default EditComplaintPage;
