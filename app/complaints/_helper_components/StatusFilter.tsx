import React from "react";
import FilterComplaint from "./FilterComplaint";
import { SearchParamsProps } from "../page";
import { Status } from "@prisma/client";

const StatusFilter = ({ queryParams, setQueryParams }: SearchParamsProps) => {
  const complaintStatusFilterOptions: { label: string; value?: Status }[] = [
    { label: "Filter By Status" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <>
      <FilterComplaint
        complaintFilterOptions={complaintStatusFilterOptions}
        queryParamKey="status"
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </>
  );
};

export default StatusFilter;
