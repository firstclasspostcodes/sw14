
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="rook" d="M8,9V5A1,1,0,0,1,9,4h1a1,1,0,0,1,1,1V7h2V5a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V7h2V5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V9a1,1,0,0,1-1,1H9A1,1,0,0,1,8,9ZM24,24H7a2,2,0,0,0-2,2v2H26V26A2,2,0,0,0,24,24ZM8.5,22h14a.5.5,0,0,0,.3-.8999l-2.40021-1.80054A.99946.99946,0,0,1,20,18.5V15.36182a.99989.99989,0,0,1,.23175-.64014l1.58478-1.90161A.5.5,0,0,0,21.43243,12H9.56757a.5.5,0,0,0-.3841.82007l1.58478,1.90161A.99989.99989,0,0,1,11,15.36182v3.13781a1.00033,1.00033,0,0,1-.4.80017L8.2,21.1001A.5.5,0,0,0,8.5,22Z"/>
</svg>
);

export const Rook = createIcon(SVG, 'Rook');
