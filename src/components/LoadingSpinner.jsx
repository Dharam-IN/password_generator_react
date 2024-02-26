import React from 'react';
import Loading from '../Images/tenor.gif'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full animate-spin overflow-hidden h-[300px] w-[300px] border-b-2 border-white text-white">
        {/* <img src={Loading} className='w-full h-full object-cover object-bottom' alt="Loading" /> */}
      </div>
    </div>
  );
}

export default LoadingSpinner;
