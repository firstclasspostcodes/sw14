
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pawn" d="M7.85382,21.14648l4.85333-4.85388A.99979.99979,0,0,0,13,15.58557V13a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v2.58557a.99979.99979,0,0,0,.29285.707l4.85333,4.85388A.5.5,0,0,1,22.7926,22H8.2074A.5.5,0,0,1,7.85382,21.14648ZM24,24H7a2,2,0,0,0-2,2v2H26V26A2,2,0,0,0,24,24ZM17.9444,10a3.5,3.5,0,1,0-4.8888,0Z"/>
</svg>
);

export const Pawn = createIcon(SVG, 'Pawn');
