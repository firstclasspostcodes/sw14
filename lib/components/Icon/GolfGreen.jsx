
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="golf-green" d="M15.5,17.79163a28.391,28.391,0,0,0-4.5.35351v-4.8952l7.50311-2.8136a1,1,0,0,0,0-1.87268L11,5.75V5A1,1,0,0,0,9,5V18.55737C5.40656,19.47223,3,21.11688,3,23c0,2.87646,5.59644,5.20831,12.5,5.20831S28,25.87646,28,23,22.40356,17.79163,15.5,17.79163ZM9,24.4082c-1.16254-.2066-2-.756-2-1.4082s.83746-1.2016,2-1.4082Zm2,0V21.5918c1.16254.2066,2,.756,2,1.4082S12.16254,24.2016,11,24.4082ZM22.5,25A1.5,1.5,0,1,1,24,23.5,1.5,1.5,0,0,1,22.5,25Z"/>
</svg>
);

export const GolfGreen = createIcon(SVG, 'GolfGreen');
