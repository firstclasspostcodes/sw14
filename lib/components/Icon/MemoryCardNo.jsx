
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="memory-card-no" d="M19,9.86426V11H17V6h1a7.95978,7.95978,0,0,1,.26331-2H11.5A1.5,1.5,0,0,0,10,5.5v6L6.5999,14.05054A1.5,1.5,0,0,0,6,15.25046V26.5A1.5,1.5,0,0,0,7.5,28h17A1.5,1.5,0,0,0,26,26.5V14A8.00407,8.00407,0,0,1,19,9.86426ZM15,11H13V6h2ZM26,0a6,6,0,1,0,6,6A6,6,0,0,0,26,0ZM22,6a3.95448,3.95448,0,0,1,.56683-2.019L28.0191,9.43311A3.95509,3.95509,0,0,1,26,10,4.00454,4.00454,0,0,1,22,6Zm7.43317,2.019L23.9809,2.56689A3.95509,3.95509,0,0,1,26,2a4.00454,4.00454,0,0,1,4,4A3.95448,3.95448,0,0,1,29.43317,8.019Z"/>
</svg>
);

export const MemoryCardNo = createIcon(SVG, 'MemoryCardNo');
