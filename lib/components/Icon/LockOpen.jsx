
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="lock-open" d="M25,12H24V5a5.00588,5.00588,0,0,0-5-5H13A5.00588,5.00588,0,0,0,8,5V7h4V5a1.01348,1.01348,0,0,1,1-1h6a1.01348,1.01348,0,0,1,1,1v7H7a2.00591,2.00591,0,0,0-2,2V26a2.00591,2.00591,0,0,0,2,2H25a2.00591,2.00591,0,0,0,2-2V14A2.00591,2.00591,0,0,0,25,12Zm-8,8.7226V23.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V20.7226a2,2,0,1,1,2,0Z"/>
</svg>
);

export const LockOpen = createIcon(SVG, 'LockOpen');
