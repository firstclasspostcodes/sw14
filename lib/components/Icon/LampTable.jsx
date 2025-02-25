
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="lamp-table" d="M23,26v2H12V26a1,1,0,0,1,1-1h2.02435L6.8877,16.00684a1.50036,1.50036,0,0,1,.05175-2.06739l4.81794-4.81793,1.81488,1.814.138.47528-3.64093,3.64093,8.543,9.4414A1.4977,1.4977,0,0,1,18.914,25H22A1,1,0,0,1,23,26ZM24.05176,7.84985,18.88544,6.34991,16.37866,3.84314a.99989.99989,0,0,0-1.41418,0L12.84314,5.96448a1,1,0,0,0,0,1.41418l2.50671,2.50665,1.5,5.16645a.5.5,0,0,0,.83374.21411l6.58228-6.58228A.5.5,0,0,0,24.05176,7.84985Z"/>
</svg>
);

export const LampTable = createIcon(SVG, 'LampTable');
