import prisma from "@/prisma/client";
import React from "react";
import Link from "next/link";
import { ComplaintSchema } from "@/app/complaints/_helper_components/ComplaintsTable";

const urgencyMap: { [key: string]: string } = {
  HIGH: " bg-red-100 text-red-800  ",
  MEDIUM: "bg-blue-100 text-blue-800  ",
  LOW: "bg-teal-100 text-teal-800 ",
};

const LatestComplaints = async () => {
  const complaints = await prisma.complaint.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <>
      <p className="text-lg text-blue-500 font-medium m-3 mb-5">
        Latest Compaints
      </p>
      <table className="divide-y divide-gray-200 p-3 w-full">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Title
            </th>
            <th
              scope="col"
              className="md:max-lg:hidden max-sm:hidden px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Urgency
            </th>
          </tr>
        </thead>
        <tbody>
          {complaints?.map((each_complaint: ComplaintSchema, index: number) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className=" flex-col px-6 py-4 whitespace-nowrap text-md font-medium ">
                <Link
                  href={`/complaints/${each_complaint.id}`}
                  className="text-blue-600 underline decoration-blue-600 hover:opacity-80"
                >
                  {each_complaint.title}
                </Link>
              </td>
              <td className="md:max-lg:hidden max-sm:hidden flex-col px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800">
                <span
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                    urgencyMap[each_complaint.urgency]
                  }`}
                >
                  {each_complaint.urgency}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestComplaints;
