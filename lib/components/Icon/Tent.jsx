
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tent" d="M28,25H26.45264L17.14832,8.53845l1.7218-3.04626a.99968.99968,0,1,0-1.74024-.98438L16,6.50684l-1.12988-1.999a.99968.99968,0,0,0-1.74024.98438l1.7218,3.04626L5.54736,25H4a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V26A1,1,0,0,0,28,25ZM10.7049,25,16,15.43555,21.2951,25Z"/>
</svg>
);

export const Tent = createIcon(SVG, 'Tent');
