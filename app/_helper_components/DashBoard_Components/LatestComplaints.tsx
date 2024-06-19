import prisma from "@/prisma/client";
import React from "react";
import Link from "next/link";
import { ComplaintSchema } from "@/app/complaints/_helper_components/ComplaintsTable";

const statusMap: { [key: string]: string } = {
  OPEN: " bg-red-100 text-red-800  ",
  IN_PROGRESS: "bg-blue-100 text-blue-800  ",
  CLOSED: "bg-teal-100 text-teal-800 ",
};

const LatestComplaints = async () => {
  const complaints = await prisma.complaint.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 p-3">
        <tbody>
          {complaints?.map((each_complaint: ComplaintSchema, index: number) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
            >
              <td className=" flex-col px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800 dark:text-neutral-200">
                <div>
                  <Link href={`/complaints/${each_complaint.id}`}>
                    {each_complaint.title}
                  </Link>
                </div>

                <div
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                    statusMap[each_complaint.status]
                  }`}
                >
                  {each_complaint.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestComplaints;
