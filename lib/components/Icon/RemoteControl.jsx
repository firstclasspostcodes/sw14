
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="remote-control" d="M19,12H13a2,2,0,0,0-2,2V24a4,4,0,0,0,4,4h2a4,4,0,0,0,4-4V14A2,2,0,0,0,19,12Zm-3,8a3,3,0,1,1,3-3A3,3,0,0,1,16,20Zm1-3a1,1,0,1,1-1-1A1.00115,1.00115,0,0,1,17,17ZM11.58008,7.39746a.99962.99962,0,0,1,0-1.41406,6.25006,6.25006,0,0,1,8.83984,0,.99989.99989,0,1,1-1.41406,1.41406,4.2508,4.2508,0,0,0-6.01172,0A.99962.99962,0,0,1,11.58008,7.39746ZM18.65137,8.751A.99989.99989,0,1,1,17.2373,10.165a1.78974,1.78974,0,0,0-2.4746,0A.99989.99989,0,0,1,13.34863,8.751,3.84064,3.84064,0,0,1,18.65137,8.751Z"/>
</svg>
);

export const RemoteControl = createIcon(SVG, 'RemoteControl');
