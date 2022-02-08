import React from 'react';
import './Loader.css';
import { CircularProgress } from '@material-ui/core';

const Spinner = ({ size = '2.5rem', ...props }) => {
  return (
      <div className="center-screen">
 <CircularProgress
      css={`
        svg {
          color: white !important;
        }
      `}
      size={size}
    />
      </div>
   
  );
};

export default Spinner;

