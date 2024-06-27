import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div className="w-screen p-3 sm:p-5 flex flex-col md:flex-row m-0">
      <div className="flex flex-col md:w-3/5 w-full">
        <div className="m-2 border rounded-xl p-2">
          <div className="flex flex-row space-x-2 justify-center">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-3 md:py-4 md:px-5">
                  <Skeleton width={100} height={20} />
                </div>
                <div className="p-4 md:p-5">
                  <Skeleton width={80} height={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-2 border rounded-xl p-2">
          <Skeleton height={400} />
        </div>
      </div>
      <div className="md:w-2/5 w-full m-2 border rounded-xl p-2">
        <>
          <p className="text-lg text-blue-500 font-medium m-3 mb-5">
            Latest Complaints
          </p>
          <table className="divide-y divide-gray-200 p-3 w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  <Skeleton width={50} />
                </th>
                <th
                  scope="col"
                  className="md:max-lg:hidden max-sm:hidden px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  <Skeleton width={50} />
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="flex-col px-6 py-4 whitespace-nowrap text-md font-medium">
                    <Skeleton width={150} />
                  </td>
                  <td className="md:max-lg:hidden max-sm:hidden flex-col px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800">
                    <Skeleton width={50} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
};

export default Loading;
