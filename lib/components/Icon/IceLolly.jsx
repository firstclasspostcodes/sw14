
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="ice-lolly" d="M22,9v9a2.00006,2.00006,0,0,1-2,2H12a2.00006,2.00006,0,0,1-2-2V9a5,5,0,0,1,5-5h2A5,5,0,0,1,22,9ZM14,26a2,2,0,0,0,4,0V22H14Z"/>
</svg>
);

export const IceLolly = createIcon(SVG, 'IceLolly');
