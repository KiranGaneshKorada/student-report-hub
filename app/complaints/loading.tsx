import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div className="w-screen p-3 sm:p-5 m-0">
      <div className="w-full flex flex-col sm:flex-row justify-between m-2 p-2">
        <div className="p-0 m-2 flex flex-row space-x-2">
          <div className="max-sm:w-full">
            <Skeleton height={40} width="100%" />
          </div>
          <div className="max-sm:w-full">
            <Skeleton height={40} width="100%" />
          </div>
        </div>
        <div className="m-2 p-0 sm:pe-5">
          <Skeleton height={40} width="100%" />
        </div>
      </div>
      <div className="sm:ps-4">
        <div className="flex flex-col border-grey-200 border rounded-lg">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-scroll">
                <table className="min-w-full divide-y divide-gray-200">
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
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        <Skeleton width={50} />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        <Skeleton width={50} />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        <Skeleton width={50} />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        <Skeleton width={50} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-blue-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          <Skeleton width={150} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <Skeleton width={100} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <Skeleton width={100} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <Skeleton width={100} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <Skeleton width={100} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
