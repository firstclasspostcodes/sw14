
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="credit-empty" d="M9.23431,14.57111a10.41906,10.41906,0,0,0-1.02508,2.84466,6.99759,6.99759,0,1,1,9.50616-8.376,10.41169,10.41169,0,0,0-2.951.65918,3.98931,3.98931,0,1,0-5.53009,4.8722ZM27.083,19.5A8.583,8.583,0,1,1,18.5,10.917,8.59307,8.59307,0,0,1,27.083,19.5Zm-3,0A5.583,5.583,0,1,0,18.5,25.083,5.5898,5.5898,0,0,0,24.083,19.5Z"/>
</svg>
);

export const CreditEmpty = createIcon(SVG, 'CreditEmpty');
