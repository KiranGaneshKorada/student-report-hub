"use client";
import React, { useState } from "react";
import CreateIssueButton from "./CreateIssueButton";
import ComplaintsTable from "./ComplaintsTable";
import StatusFilter from "./StatusFilter";
import UrgencyFilter from "./UrgencyFilter";

export interface SearchParamsProps {
  queryParams: any;
  setQueryParams: React.Dispatch<React.SetStateAction<any>>;
}

const page = () => {
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

export const dynamic = "force-dynamic";

export default page;
