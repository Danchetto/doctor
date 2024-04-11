import React from 'react';

const Spacer: React.FC<{ size?: number }> = ({ size }) => (
  <div className="w-full" style={{ height: `${size || 24}px` }} />
);

export default Spacer;
