import React from 'react';
import loaderGif from '../../../public/images/loader.gif'; // Replace with your loader GIF path

const FullScreenLoader = () => {
  return (
    <div
      className='fixed inset-0 bg-black flex items-center justify-center '
      style={{ zIndex: 1000 }}
    >
      <img
        src="/images/loader.gif"
        alt='Loading...'
        className='w-20 h-20 object-contain'
      />
    </div>
  );
};

export default FullScreenLoader;
