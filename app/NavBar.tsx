"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className=" flex space-x-5 border-b px-5 h-14 items-center">
      <Link href="/" className="flex  text-l font-semibold items-center">
        <svg
          width="35"
          height="35"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20 H70 A10 10 0 0 1 80 30 V60 A10 10 0 0 1 70 70 H30 L10 90 Z"
            stroke="black"
            stroke-width="2"
          />
          <polygon points="50,10 30,20 70,20" fill="black" />
          <rect x="47" y="20" width="6" height="10" fill="black" />
          <polyline
            points="30,45 45,60 70,35"
            stroke="white"
            stroke-width="4"
            fill="none"
          />
        </svg>
        Student Report Hub
      </Link>
      <ul className="flex space-x-5 ">
        <li>
          <Link
            href="/"
            className={` hover:text-slate-800 ${
              currentPath == "/" ? "text-slate-950" : "text-slate-500"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/complaints"
            className={` hover:text-slate-800 ${
              currentPath == "/complaints" ? "text-slate-950" : "text-slate-500"
            }`}
          >
            Complaints
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
