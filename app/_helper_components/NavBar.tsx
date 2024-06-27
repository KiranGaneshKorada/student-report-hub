"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: userData } = useSession();
  return (
    <nav className=" flex space-x-5 border-b px-5 h-14 items-center m-0">
      <Link
        href="/"
        className="text-blue-500 flex  text-l font-semibold items-center"
      >
        <svg
          className="text-blue-500"
          width="35"
          height="35"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20 H70 A10 10 0 0 1 80 30 V60 A10 10 0 0 1 70 70 H30 L10 90 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
          <polygon points="50,10 30,20 70,20" fill="currentColor" />
          <rect x="47" y="20" width="6" height="10" fill="currentColor" />
          <polyline
            points="30,45 45,60 70,35"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        Student Report Hub
      </Link>
      <ul className="flex space-x-5 ">
        <li key={"dashboard"}>
          <Link
            href="/"
            className={` hover:text-gray-400 ${
              currentPath == "/" ? "text-blue-500" : "text-gray-600"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li key={"complaints"}>
          <Link
            href="/complaints"
            className={` hover:text-gray-400 ${
              currentPath == "/complaints" ? "text-blue-500" : "text-gray-600"
            }`}
          >
            Complaints
          </Link>
        </li>
      </ul>
      {status === "authenticated" && (
        <Link href={"/api/auth/signout"}>Logout {userData.user?.email}</Link>
      )}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
