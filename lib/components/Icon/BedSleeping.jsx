
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bed-sleeping" d="M7,13a2,2,0,1,1,2,2A2,2,0,0,1,7,13Zm21,.67084a2,2,0,0,0-1.64417-1.96814l-8.77325-1.58618A5.9979,5.9979,0,0,0,16.40588,10H15a3,3,0,0,0-3,3v2H28ZM29.5,17H6V7.5A.5.5,0,0,0,5.5,7h-2a.5.5,0,0,0-.5.5v19a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V23H27v3.5a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,29.5,17Z"/>
</svg>
);

export const BedSleeping = createIcon(SVG, 'BedSleeping');
