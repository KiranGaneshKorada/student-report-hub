
import { useSession } from "next-auth/react";
import LatestComplaints from "./_helper_components/DashBoard_Components/LatestComplaints";
import StatusSummary from "./_helper_components/DashBoard_Components/ComplaintsSummary/StatusSummary";
import { Metadata } from "next";
import prisma from "@/prisma/client";

export default async function Home() {

  const open = await prisma.complaint.count({
    where: { status: 'OPEN' },
  });
  const inProgress = await prisma.complaint.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma.complaint.count({
    where: { status: 'CLOSED' },
  });
  // const { data } = useSession();
  // console.log(data);
  return (
    <div className="p-5">
      <div className=" m-2">
      <StatusSummary open={open}
          inProgress={inProgress}
          closed={closed}/>
      </div>
      
      <LatestComplaints />
    </div>
  );
}
export const dynamic = 'force-dynamic'; 


export const metadata: Metadata = {
  title: 'Students Report Hub - Dashboard',
  description: 'View a summary of Complaints'
};
