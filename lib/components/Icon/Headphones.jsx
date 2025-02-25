
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="headphones" d="M28,16v7.45862a2.99988,2.99988,0,0,1-2.50677,2.9591l-2.3288.38819A1,1,0,0,1,22,25.81958V19.18042a1,1,0,0,1,1.16443-.98633L25,18.5V16A9,9,0,0,0,7,16v2.5l1.83557-.30591A1,1,0,0,1,10,19.18042v6.63916a1,1,0,0,1-1.16443.98633l-2.3288-.38819A2.99988,2.99988,0,0,1,4,23.45862V16a12,12,0,0,1,24,0Z"/>
</svg>
);

export const Headphones = createIcon(SVG, 'Headphones');
