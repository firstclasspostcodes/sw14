
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-dislike" d="M27,8V19H23a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1ZM17.67157,8H10.35406A1.9999,1.9999,0,0,0,8.49713,9.2572l-2.37585,6.891a1.00019,1.00019,0,0,0,.0169.69733l.61036,1.52588A1,1,0,0,0,7.67706,19H13.7785a.5.5,0,0,1,.46814.67554L13.191,22.4906A2.99966,2.99966,0,0,0,13,23.544V25.5a1.50053,1.50053,0,0,0,1.1123,1.44934.496.496,0,0,0,.12751.01666.51039.51039,0,0,0,.431-.23919l2.21667-3.5467q.11251-.18007.24-.35L20,19V9.5l-.91418-.91425A2.00016,2.00016,0,0,0,17.67157,8Z"/>
</svg>
);

export const HandDislike = createIcon(SVG, 'HandDislike');
