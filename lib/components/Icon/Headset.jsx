
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="headset" d="M28,16v7.45862a2.99955,2.99955,0,0,1-2,2.82715V27a3.00328,3.00328,0,0,1-3,3H19.72253A1.99156,1.99156,0,0,1,18,31H17a2,2,0,0,1,0-4h1a1.99156,1.99156,0,0,1,1.72253,1H23a1.001,1.001,0,0,0,1-1v-.33337l-.83557.13928A1,1,0,0,1,22,25.81958V19.18042a1,1,0,0,1,1.16443-.98633L25,18.5V16A9,9,0,0,0,7,16v2.5l1.83557-.30591A1,1,0,0,1,10,19.18042v6.63916a1,1,0,0,1-1.16443.98633l-2.3288-.38819A2.99988,2.99988,0,0,1,4,23.45862V16a12,12,0,0,1,24,0Z"/>
</svg>
);

export const Headset = createIcon(SVG, 'Headset');
