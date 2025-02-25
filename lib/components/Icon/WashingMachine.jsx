
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="washing-machine" d="M16,10a7,7,0,1,0,7,7A7.00848,7.00848,0,0,0,16,10Zm2.4082,5.91992a4.18829,4.18829,0,0,0-3.06933,1.33692,2.28493,2.28493,0,0,1-1.73145.82324,4.84812,4.84812,0,0,1-2.59363-1.21674,4.98039,4.98039,0,0,1,9.941-.31085A5.58688,5.58688,0,0,0,18.4082,15.91992ZM27,4H5A.99943.99943,0,0,0,4,5V27a.99943.99943,0,0,0,1,1H27a.99943.99943,0,0,0,1-1V5A.99943.99943,0,0,0,27,4ZM16,26a9,9,0,1,1,9-9A9.00984,9.00984,0,0,1,16,26ZM26,7.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const WashingMachine = createIcon(SVG, 'WashingMachine');
