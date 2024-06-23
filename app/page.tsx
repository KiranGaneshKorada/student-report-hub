
import { useSession } from "next-auth/react";
import LatestComplaints from "./_helper_components/DashBoard_Components/LatestComplaints";
import StatusSummary from "./_helper_components/DashBoard_Components/ComplaintsSummary/StatusSummary";
import { Metadata } from "next";

export default function Home() {
  // const { data } = useSession();
  // console.log(data);
  return (
    <div className="p-5">
      <div className=" m-2">
      <StatusSummary />
      </div>
      
      <LatestComplaints />
    </div>
  );
}


export const metadata: Metadata = {
  title: 'Students Report Hub - Dashboard',
  description: 'View a summary of Complaints'
};
