
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-alert" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm2-5v2a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2A1,1,0,0,1,18,20Zm0-10-.00073,3-.91962,4.59808A.5.5,0,0,1,16.58936,18H15.40918a.5.5,0,0,1-.4903-.40192L14,13V10a1,1,0,0,1,1-1h2A1,1,0,0,1,18,10Z"/>
</svg>
);

export const CircleEmptyAlert = createIcon(SVG, 'CircleEmptyAlert');
