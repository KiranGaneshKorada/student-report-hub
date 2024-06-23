"use client";
import React, { useState } from "react";
import CreateIssueButton from "./_helper_components/CreateIssueButton";
import ComplaintsTable from "./_helper_components/ComplaintsTable";
import StatusFilter from "./_helper_components/StatusFilter";
import UrgencyFilter from "./_helper_components/UrgencyFilter";
import { Metadata } from "next";

export interface SearchParamsProps {
  queryParams: any;
  setQueryParams: React.Dispatch<React.SetStateAction<any>>;
}

const Complaints = () => {
  const [queryParams, setQueryParams] = useState({});

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
      <div>
        <ComplaintsTable queryParams={queryParams} />
      </div>
    </div>
  );
};



export default Complaints;
