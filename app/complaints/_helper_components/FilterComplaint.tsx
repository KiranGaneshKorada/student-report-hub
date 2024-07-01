"use client";
import { Status, Urgency } from "@prisma/client";
import { SearchParamsProps } from "../page";

interface FilterComplaintProps extends SearchParamsProps {
  complaintFilterOptions: { label: string; value?: Urgency|Status }[];
  queryParamKey: string;
}

const FilterComplaint = ({
  complaintFilterOptions,
  queryParamKey,
  setQueryParams,
}: FilterComplaintProps) => {
  return (
    <>
      <select
        name="status"
        id={queryParamKey}
        className="py-3 px-3 pe-4 block w-full text-black bg-gray-100 border-transparent rounded-lg text-sm max-sm:text-xs focus:border-blue-500 focus:ring-blue-500  "
        onChange={(e) => {
          e.preventDefault();
          const val = e.currentTarget.value;
          if (val) {
            setQueryParams((previousState: any) => ({
              ...previousState,
              [queryParamKey]: val,
            }));
          } else {
            setQueryParams((previousState: any) => {
              const newState = { ...previousState };
              delete newState[queryParamKey]; 
              return {
                ...newState,
              };
            });
          }
        }}
      >
        {complaintFilterOptions.map((each_option,index) => (
          <option key={index} value={each_option.value ?? ""}>
            {each_option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterComplaint;
