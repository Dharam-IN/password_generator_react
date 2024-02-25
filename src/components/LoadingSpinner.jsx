import React from 'react';
import Loading from '../Images/tenor.gif'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-3xl overflow-hidden h-[380px] w-[300px] border-b-2 border-gray-900 text-white">
        <img src={Loading} className='w-full h-full object-cover object-bottom' alt="Loading" />
      </div>
    </div>
  );
}

export default LoadingSpinner;
