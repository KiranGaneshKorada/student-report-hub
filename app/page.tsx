import LatestComplaints from "./_helper_components/DashBoard_Components/LatestComplaints";
import StatusSummary from "./_helper_components/DashBoard_Components/ComplaintsSummary/StatusSummary";
import { Metadata } from "next";
import prisma from "@/prisma/client";
import ComplaintChart from "./_helper_components/DashBoard_Components/ComplaintChart";

export default async function Home() {
  const open = await prisma.complaint.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.complaint.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.complaint.count({
    where: { status: "CLOSED" },
  });

  return (
    <div className="w-screen p-3 sm:p-5 flex flex-col md:flex-row m-0">
      <div className="flex flex-col md:w-3/5 w-full ">
        <div className=" m-2 border rounded-xl p-2 ">
          <StatusSummary open={open} inProgress={inProgress} closed={closed} />
        </div>
        <div className="m-2 border rounded-xl p-2">
          <ComplaintChart open={open} inProgress={inProgress} closed={closed} />
        </div>
      </div>
      <div className="md:w-2/5 w-full m-2 border rounded-xl p-2 ">
        <LatestComplaints />
      </div>
    </div>
  );
}
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Students Report Hub - Dashboard",
  description: "View a summary of Complaints",
};
