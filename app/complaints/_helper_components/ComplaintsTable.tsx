'use client'
import { $Enums } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

 export interface ComplaintSchema {
  id: number;
  title: string;
  category: $Enums.Category;
  location: string;
  description: string;
  urgency: $Enums.Urgency;
  status: $Enums.Status;
  createdAt: Date;
  updatedAt: Date;
  userEmailId:string
}
interface ComplaintsTableProps {
  queryParams: any;
}

const statusMap: { [key: string]: string } = {
  OPEN: " bg-red-100 text-red-800  ",
  IN_PROGRESS: "bg-blue-100 text-blue-800  ",
  CLOSED: "bg-teal-100 text-teal-800 ",
};

const ComplaintsTable = ({ queryParams }: ComplaintsTableProps) => {

  
  const {
    data: complaints,
    error,
    isLoading,
  } = useQuery<ComplaintSchema[]>({
    queryKey: ["complaints", queryParams],
    queryFn: async () => {
      const res = await axios.get("/api/complaints",{
        params: queryParams
      });
      console.log(res.data);
      return res.data;
    },
  });

  // if(error || !complaints) return <>error</>

  // if(isLoading) return <>Loading</>;

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-scroll">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {complaints?.map((each_complaint:ComplaintSchema, index:number) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <Link href={`/complaints/${each_complaint.id}`}>
                        {each_complaint.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      <span
                        className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                          statusMap[each_complaint.status]
                        }`}
                      >
                        {each_complaint.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {each_complaint.createdAt.toString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const dynamic='force-dynamic';

export default ComplaintsTable;