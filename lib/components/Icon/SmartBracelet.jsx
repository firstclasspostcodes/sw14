
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="smart-bracelet" d="M19,4H13a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,19,4ZM18,19a1.00115,1.00115,0,0,1-1,1H15a1.00115,1.00115,0,0,1-1-1V14a1.00115,1.00115,0,0,1,1-1h2a1.00115,1.00115,0,0,1,1,1Zm6.34766-2A3.72691,3.72691,0,0,1,23.249,19.65137.99989.99989,0,1,1,21.835,18.2373a1.74934,1.74934,0,0,0,0-2.4746A.99989.99989,0,1,1,23.249,14.34863,3.72691,3.72691,0,0,1,24.34766,17Zm3.5,0a6.2144,6.2144,0,0,1-1.83106,4.41992.99989.99989,0,1,1-1.41406-1.41406,4.2508,4.2508,0,0,0,0-6.01172.99989.99989,0,0,1,1.41406-1.41406A6.2144,6.2144,0,0,1,27.84766,17Z"/>
</svg>
);

export const SmartBracelet = createIcon(SVG, 'SmartBracelet');
