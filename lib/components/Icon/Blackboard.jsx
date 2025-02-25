
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="blackboard" d="M26.5,18H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h6.67816L7.21094,26.38641A.99966.99966,0,1,0,8.78906,27.614L11.59991,24h8.80018L23.21094,27.614a.99966.99966,0,1,0,1.57812-1.22754L19.82184,20H26.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,26.5,18ZM13.15546,22,14.711,20h2.578l1.55554,2ZM26,16H6V5A1,1,0,0,1,7,4H25a1,1,0,0,1,1,1Z"/>
</svg>
);

export const Blackboard = createIcon(SVG, 'Blackboard');
