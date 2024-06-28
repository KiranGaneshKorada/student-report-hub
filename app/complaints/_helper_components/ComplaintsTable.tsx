"use client";
import { $Enums } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

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
  userEmailId: string;
}
interface ComplaintsTableProps {
  queryParams: any;
}

const urgencyMap: { [key: string]: string } = {
  HIGH: " bg-red-100 text-red-800  ",
  MEDIUM: "bg-blue-100 text-blue-800  ",
  LOW: "bg-teal-100 text-teal-800 ",
};

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
      const res = await axios.get("/api/complaints", {
        params: queryParams,
      });
      return res.data;
    },
  });

  if(isLoading || error || !complaints){
    return <div className="sm:ps-4">
    <div className="flex flex-col border-grey-200 border rounded-lg">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    <Skeleton width={50} />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    <Skeleton width={50} />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    <Skeleton width={50} />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    <Skeleton width={50} />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    <Skeleton width={50} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(7)].map((_, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-blue-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <Skeleton width={150} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <Skeleton width={100} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  }

  return (
    <div className="flex flex-col border-grey-200 border rounded-lg">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-scroll">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase d"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                  >
                    Urgency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase d"
                  >
                    Created
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase d"
                  >
                    Reported By
                  </th>
                </tr>
              </thead>
              <tbody>
                {complaints?.map(
                  (each_complaint: ComplaintSchema, index: number) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 "
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <Link
                          className="text-blue-600 underline decoration-blue-600 hover:opacity-80"
                          href={`/complaints/${each_complaint.id}`}
                        >
                          {each_complaint.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        <span
                          className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                            statusMap[each_complaint.status]
                          }`}
                        >
                          {each_complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        <span
                          className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                            urgencyMap[each_complaint.urgency]
                          }`}
                        >
                          {each_complaint.urgency}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {each_complaint.createdAt.toString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {each_complaint.userEmailId}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ComplaintsTable;
