
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="knight" d="M26,26v2H5V26a2,2,0,0,1,2-2H24A2,2,0,0,1,26,26ZM9.9389,22H22c0-4-5.57825-5.67822-5.9624-10.38428l6.10382-.87207A.99983.99983,0,0,0,23,9.75378V8.31445a1.00005,1.00005,0,0,0-.64935-.93652L16,5V3.03809a8.799,8.799,0,0,0-7.94666,8.5747C8.05334,17,10,18,10,21,10,21.35547,9.96771,21.676,9.9389,22Z"/>
</svg>
);

export const Knight = createIcon(SVG, 'Knight');
