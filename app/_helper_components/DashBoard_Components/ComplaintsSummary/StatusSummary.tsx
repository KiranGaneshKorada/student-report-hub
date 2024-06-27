import React from "react";


interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const statusMap: { [key: string]: string } = {
  OPEN: "  text-red-600  ",
  IN_PROGRESS: " text-blue-600  ",
  CLOSED: " text-teal-600 ",
};


const StatusSummary = ({open,inProgress,closed}:Props) => {
  const containers: {
    label: string;
    value: number;
    status: string;

  }[] = [
    { label: 'Open Complaints', value: open, status: 'OPEN' },
    {
      label: 'In-progress Complaints',
      value: inProgress,status: 'IN_PROGRESS',
    },
    { label: 'Closed Complaints', value: closed ,status: 'CLOSED'},
  ];
  return (
    <div className=" flex flex-row space-x-2 justify-center">
      {containers.map((each_card_data,index)=>(<div  key={index}className="flex flex-col bg-white border shadow-sm rounded-xl">
        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-3 md:py-4 md:px-5">
          <p className="mt-1 max-sm:text-xs text-md font-semibold text-blue-500">
            {each_card_data.label}
          </p>
        </div>
        <div className="p-4 md:p-5">
          <h3 className={`text-lg font-bold ${
                    statusMap[each_card_data.status]}`}>
            {each_card_data.value}
          </h3>
        </div>
      </div>))}
    </div>
  );
};

export default StatusSummary;
