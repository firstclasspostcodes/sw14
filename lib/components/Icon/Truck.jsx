
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="truck" d="M27,2H5A1,1,0,0,0,4,3V19a1,1,0,0,0,1,1v7a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V25H23v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V20a1,1,0,0,0,1-1V3A1,1,0,0,0,27,2ZM11,22.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5Zm14,0a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5ZM25,15a1.00291,1.00291,0,0,1-1,1H8a1.00291,1.00291,0,0,1-1-1V10A1.00291,1.00291,0,0,1,8,9H24a1.00291,1.00291,0,0,1,1,1Z"/>
</svg>
);

export const Truck = createIcon(SVG, 'Truck');
