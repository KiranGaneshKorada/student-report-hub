"use client";
import prisma from "@/prisma/client";
import React, { useEffect, useState } from "react";
import CreateIssueButton from "./CreateIssueButton";
import ComplaintsTable, { ComplaintSchema } from "./ComplaintsTable";
import { notFound } from "next/navigation";
import StatusFilter from "./StatusFilter";
import UrgencyFilter from "./UrgencyFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SearchParamsProps {
  queryParams: any;
  setQueryParams: React.Dispatch<React.SetStateAction<any>>;
}

const page = () => {
  const [queryParams, setQueryParams] = useState({});

  const {
    data: complaints,
    error,
    isLoading,
  } = useQuery<ComplaintSchema[]>({
    queryKey: ["complaints", queryParams],
    queryFn: async () => {
      const res = await axios.get("/api/complaints");
      console.log(res.data);
      return res.data;
    },
  });

  if(error || !complaints) return <></>

  if(isLoading) return <>Loading</>;

  return (
    <div className="p-3">
      <div className="flex flex-row space-x-2">
        <StatusFilter
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
        <CreateIssueButton />
        <UrgencyFilter
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
      </div>
      <div><ComplaintsTable complaints={complaints}/></div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default page;
