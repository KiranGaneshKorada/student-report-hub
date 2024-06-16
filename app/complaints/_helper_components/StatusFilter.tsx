import React from "react";
import FilterComplaint from "./FilterComplaint";
import { SearchParamsProps } from "../page";
import { Status } from "@prisma/client";

const StatusFilter = ({ queryParams, setQueryParams }: SearchParamsProps) => {
  const complaintStatusFilterOptions: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <div>
      <FilterComplaint
        complaintFilterOptions={complaintStatusFilterOptions}
        queryParamKey="status"
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default StatusFilter;
