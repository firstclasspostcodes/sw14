
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="clipboard" d="M22,18.5v1a.5.5,0,0,1-.5.5h-11a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h11A.5.5,0,0,1,22,18.5ZM21.5,22h-11a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,21.5,22Zm0-8h-11a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,21.5,14ZM26,10V26a2.00229,2.00229,0,0,1-2,2H8a2.00229,2.00229,0,0,1-2-2V10A2.00229,2.00229,0,0,1,8,8h2V7a1,1,0,0,1,1-1h2a2.00006,2.00006,0,0,1,2-2h2a2.00006,2.00006,0,0,1,2,2h2a1,1,0,0,1,1,1V8h2A2.00229,2.00229,0,0,1,26,10ZM24.001,26,24,10H22v1a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V10H8V26Z"/>
</svg>
);

export const Clipboard = createIcon(SVG, 'Clipboard');
