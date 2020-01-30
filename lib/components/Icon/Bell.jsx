
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bell" d="M26,22.07037V23a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1v-.92963a2.00005,2.00005,0,0,1,.89062-1.66412l.32819-.21881A3.99993,3.99993,0,0,0,9,16.85925V13a7.00018,7.00018,0,0,1,5-6.70636V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6.31073a7.31386,7.31386,0,0,1,5,6.98273v3.56579a3.99993,3.99993,0,0,0,1.78119,3.32819l.32819.21881A2.00005,2.00005,0,0,1,26,22.07037ZM14,27a2,2,0,0,0,4,0V26H14Z"/>
</svg>
);

export const Bell = createIcon(SVG, 'Bell');
