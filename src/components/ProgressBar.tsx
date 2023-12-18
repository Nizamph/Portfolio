import React from 'react';

const ProgressBar = ({
  percentage,
  title,
}: {
  percentage: number;
  title: string;
}) => {
  return (
    <div className='relative flex flex-col gap-3 pt-1 w-full'>
      <h1>{title}</h1>
      <div className='flex h-3 border-gray-500 mb-2 overflow-hidden bg-slate-300 rounded-full text-xs w-[80%] border-1'>
        <div
          style={{ width: `${percentage}%` }}
          className='shadow-none flex flex-col text-center rounded-full  text-white justify-center bg-blue-600'></div>
      </div>
    </div>
  );
};

export default ProgressBar;
