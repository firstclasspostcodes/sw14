
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="gas-station" d="M27.97559,10.64941,22,5.42108V8.07867l1,.87494V12a1,1,0,0,0,1,1h3v9H24V17a2.0026,2.0026,0,0,0-2-2H20V6a2,2,0,0,0-2-2H8A2,2,0,0,0,6,6V25H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V26a1,1,0,0,0-1-1H20V17h2v5a2.0026,2.0026,0,0,0,2,2h3a2.0026,2.0026,0,0,0,2-2V12.90723A3.00136,3.00136,0,0,0,27.97559,10.64941ZM17,12.5a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,9.5,7h7a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const GasStation = createIcon(SVG, 'GasStation');
