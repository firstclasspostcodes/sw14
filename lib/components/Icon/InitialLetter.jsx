
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="initial-letter" d="M28,12v1a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H27A1,1,0,0,1,28,12ZM27,5H15a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Zm0,18H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Zm0-6H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17ZM11.38574,11.61426,8.92188,5.71387a1.00037,1.00037,0,0,0-1.84571,0L4.6123,11.61426a1.00023,1.00023,0,0,0,1.84571.77148L7.0365,11H8.96155L9.54,12.38574a1.00022,1.00022,0,1,0,1.8457-.77148ZM7.66766,9.5l.33088-.92676L8.32941,9.5Z"/>
</svg>
);

export const InitialLetter = createIcon(SVG, 'InitialLetter');
