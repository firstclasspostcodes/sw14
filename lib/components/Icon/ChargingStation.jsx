
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="charging-station" d="M30,9V7a1,1,0,0,0-2,0V9H26V7a1,1,0,0,0-2,0V9a.99943.99943,0,0,0-1,1v1.5a.99441.99441,0,0,0,.14258.51465l1.5,2.5A1.00022,1.00022,0,0,0,25.5,15H26v7H24V17a2.0026,2.0026,0,0,0-2-2H20V6a2,2,0,0,0-2-2H8A2,2,0,0,0,6,6V25H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V26a1,1,0,0,0-1-1H20V17h2v5a2.0026,2.0026,0,0,0,2,2h2a2.0026,2.0026,0,0,0,2-2V15h.5a1.00022,1.00022,0,0,0,.85742-.48535l1.5-2.5A.99441.99441,0,0,0,31,11.5V10A.99943.99943,0,0,0,30,9ZM17,12.5a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,9.5,7h7a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const ChargingStation = createIcon(SVG, 'ChargingStation');
