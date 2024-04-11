import React from 'react';

const Footer: React.FC = () => (
  <footer className="h-20 flex flex-col text-sm justify-center items-center border-t-[1px] border-gray-400 text-gray-500 bg-blue-50">
    <div>Tuchin Petr</div>
    <div>{`© Copyright ${new Date().getFullYear()}. All Rights Reserved.`}</div>

  </footer>
);

export default Footer;
