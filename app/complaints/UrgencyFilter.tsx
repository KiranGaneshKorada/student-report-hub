import React from "react";
import FilterComplaint from "./FilterComplaint";
import { SearchParamsProps } from "./page";

const UrgencyFilter = ({ queryParams, setQueryParams }: SearchParamsProps) => {
  const complaintUrgencyFilterOptions: { label: string; value: string }[] = [
    { label: "All", value: "" },
    { label: "Low", value: "LOW" },
    { label: "High", value: "HIGH" },
    { label: "Medium", value: "MEDIUM" },
  ];
  return (
    <div>
      <FilterComplaint
        complaintFilterOptions={complaintUrgencyFilterOptions}
        queryParamKey="urgency"
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default UrgencyFilter;
