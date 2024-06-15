"use client";
import { SearchParamsProps } from "./page";

interface FilterComplaintProps extends SearchParamsProps {
  complaintFilterOptions: { label: string; value: string }[];
  queryParamKey: string;
}

const FilterComplaint = ({
  complaintFilterOptions,
  queryParamKey,
  setQueryParams,
}: FilterComplaintProps) => {
  return (
    <div>
      <select
        name="status"
        id="complaintStatusFilter"
        onChange={(e) => {
          e.preventDefault();
          const val = e.currentTarget.value;
          if (val.length > 0) {
            setQueryParams((previousState: any) => ({
              ...previousState,
              [queryParamKey]: val,
            }));
          } else {
            setQueryParams((previousState: any) => {
              const newState = { ...previousState };
              delete newState[queryParamKey]; // Remove the specific key-value pair
              return {
                ...newState,
              };
            });
          }
        }}
      >
        {complaintFilterOptions.map((each_option) => (
          <option key={each_option.value} value={each_option.value}>
            {each_option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComplaint;
