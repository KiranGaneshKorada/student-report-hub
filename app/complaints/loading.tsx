import React from "react";
import CreateIssueButton from "./_helper_components/CreateIssueButton";
import ComplaintsTable from "./_helper_components/ComplaintsTable";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  const complaints = [0, 1, 2, 3, 4, 5];
  return (
    <div className="p-3">
      <div>
        <CreateIssueButton />
      </div>
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-scroll">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((each_complaint, index) => (
                      <tr
                        key={index}
                        className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          <Skeleton />{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          <span
                            className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${(
                              <Skeleton />
                            )}`}
                          >
                            <Skeleton />
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          <Skeleton />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default loading;
