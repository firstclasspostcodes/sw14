
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-alert" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm2,18a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm-.00073-9-.91962,4.598a.5.5,0,0,1-.49029.402H15.40918a.5.5,0,0,1-.4903-.402L14,13V10a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Z"/>
</svg>
);

export const CircleAlert = createIcon(SVG, 'CircleAlert');
