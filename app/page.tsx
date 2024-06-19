'use client'

import { useSession } from "next-auth/react";
import LatestComplaints from "./_helper_components/DashBoard_Components/LatestComplaints";

export default function Home() {
  const{data}=useSession();
  console.log(data)
  return (
   <div><LatestComplaints/></div>
  );
}
