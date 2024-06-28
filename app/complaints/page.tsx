"use client";
import React, { useState } from "react";
import CreateIssueButton from "./_helper_components/CreateIssueButton";
import ComplaintsTable from "./_helper_components/ComplaintsTable";
import StatusFilter from "./_helper_components/StatusFilter";
import UrgencyFilter from "./_helper_components/UrgencyFilter";

export interface SearchParamsProps {
  queryParams: any;
  setQueryParams: React.Dispatch<React.SetStateAction<any>>;
}

const Complaints = () => {
  const [queryParams, setQueryParams] = useState({});

  return (
    <div className="w-screen p-3 sm:p-5 m-0">
      <div className="w-full flex flex-col sm:flex-row justify-between m-2 p-2">
        <div className=" p-0 m-2 flex flex-row space-x-2">
          <div className="max-sm:w-full">
          <StatusFilter
            queryParams={queryParams}
            setQueryParams={setQueryParams}
          />
          </div>
          <div className="max-sm:w-full">
          <UrgencyFilter
            queryParams={queryParams}
            setQueryParams={setQueryParams}
          />
          </div>
        </div>
        <div className="m-2 p-0 sm:pe-5">
          <CreateIssueButton />
        </div>
      </div>
      <div className="sm:ps-4">
        <ComplaintsTable queryParams={queryParams} />
      </div>
    </div>
  );
};

export default Complaints;
