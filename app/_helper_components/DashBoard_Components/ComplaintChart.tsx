'use client'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const ComplaintChart = ({open,inProgress,closed}:Props) => {
  const data = [
    { label: 'Open', value: open },
    { label: 'In Progress', value: inProgress },
    { label: 'Closed', value: closed },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            fill='#3b82f6' 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ComplaintChart
