import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-blue-500 min-h-screen">
      {children}
    </div>
  );
};

export default Background;
