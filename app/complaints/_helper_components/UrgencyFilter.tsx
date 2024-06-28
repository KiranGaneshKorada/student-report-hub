import React from "react";
import FilterComplaint from "./FilterComplaint";
import { SearchParamsProps } from "../page";
import { Urgency } from "@prisma/client";

const UrgencyFilter = ({ queryParams, setQueryParams }: SearchParamsProps) => {
  const complaintUrgencyFilterOptions: { label: string; value?: Urgency }[] = [
    { label: "Filter By Urgency" },
    { label: "Low", value: "LOW" },
    { label: "High", value: "HIGH" },
    { label: "Medium", value: "MEDIUM" },
  ];
  return (
    <>
      <FilterComplaint
        complaintFilterOptions={complaintUrgencyFilterOptions}
        queryParamKey="urgency"
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </>
  );
};

export default UrgencyFilter;
