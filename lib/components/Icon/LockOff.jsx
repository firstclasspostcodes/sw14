
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="lock-off" d="M27,14V26a2.00591,2.00591,0,0,1-2,2H7.9668L24,11.96716V12h1A2.00591,2.00591,0,0,1,27,14Zm.21484-8.93945L5.06055,27.21436a1.49984,1.49984,0,0,1-2.1211-2.1211L5,23.03278V14a2.00591,2.00591,0,0,1,2-2H8V9a5.00588,5.00588,0,0,1,5-5h6a4.94694,4.94694,0,0,1,3.53546,1.49768l2.55829-2.55823a1.49984,1.49984,0,0,1,2.12109,2.1211ZM19.71667,8.31647A.994.994,0,0,0,19,8H13a1.01348,1.01348,0,0,0-1,1v3h4.033Z"/>
</svg>
);

export const LockOff = createIcon(SVG, 'LockOff');
