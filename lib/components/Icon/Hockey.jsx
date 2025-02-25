
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hockey" d="M24.94452,10.37286,14.009,27.20062a2.00024,2.00024,0,0,1-1.47137.89966l-6.31677.65314A2.00026,2.00026,0,0,1,4,26.76562V24.19a2,2,0,0,1,2.181-1.99176l4.66754.4242a3.00012,3.00012,0,0,0,2.78687-1.35273L22.30829,8.6781ZM26,24H22a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V25A1,1,0,0,0,26,24ZM27.85706,5.1568l-1.34168-.87189a1,1,0,0,0-1.38336.29352L23.4436,7.02972l2.591,1.66571,1.93994-2.98522A.40009.40009,0,0,0,27.85706,5.1568Z"/>
</svg>
);

export const Hockey = createIcon(SVG, 'Hockey');
