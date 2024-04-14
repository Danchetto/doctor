import React from 'react';

const Footer: React.FC = () => (
  <footer
    className="min-h-20 py-10 flex flex-col text-sm justify-center items-center border-t-[0px] border-gray-400 text-gray-500"
  >
    <div>{`© Copyright ${new Date().getFullYear()}. All Rights Reserved.`}</div>
    <div>Tuchin Petr</div>
    <div>Made by danchetto.com</div>

  </footer>
);

export default Footer;
