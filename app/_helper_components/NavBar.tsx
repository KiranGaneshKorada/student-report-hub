"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: userData } = useSession();
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-md py-4 border-b">
        <nav
          className="max-w-[85rem] w-full mx-4 px-4 flex flex-wrap basis-full items-center justify-between"
          aria-label="Global"
        >
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
          </Link>{" "}
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-alignment"
              aria-controls="navbar-alignment"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="m-0 p-0 max-sm:hidden">
              {status === "authenticated" && (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                  <button
                    id="hs-mega-menu-basic-dr"
                    type="button"
                    className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium"
                  >
                    {userData.user?.email}
                    <svg
                      className="ms-1 flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href={"/api/auth/signout"}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
              {status === "unauthenticated" && (
                <Link
                  href={"/api/auth/signin"}
                  className="py-2 text-white px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-500  shadow-sm hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div
            id="navbar-alignment"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <Link
                href="/"
                className={` hover:text-gray-400 ${
                  currentPath == "/" ? "text-blue-500" : "text-gray-600"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/complaints"
                className={` hover:text-gray-400 ${
                  currentPath == "/complaints"
                    ? "text-blue-500"
                    : "text-gray-600"
                }`}
              >
                Complaints
              </Link>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] sm:hidden [--adaptive:none] ">
                {status === "authenticated" && (
                  <>
                    <button
                      id="hs-mega-menu-basic-dr"
                      type="button"
                      className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium"
                    >
                      {userData.user?.email}
                      <svg
                        className="ms-1 flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href={"/api/auth/signout"}
                      >
                        Logout
                      </Link>
                    </div>
                  </>
                )}
                {status === "unauthenticated" && (
                  <Link
                    href={"/api/auth/signin"}
                    className="py-2 text-white px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-500  shadow-sm hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
