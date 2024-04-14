import React, { SVGProps } from 'react';

const ArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="20px"
    height="20px"
    className="ml-4 fill-current"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
    />
  </svg>
);

export default ArrowIcon;
