
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="female" d="M25,13.5a9.5,9.5,0,1,0-11,9.36963V25H12a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V28h2a1,1,0,0,0,1-1V26a1,1,0,0,0-1-1H17V22.86963A9.5066,9.5066,0,0,0,25,13.5ZM15.5,20A6.5,6.5,0,1,1,22,13.5,6.50753,6.50753,0,0,1,15.5,20Z"/>
</svg>
);

export const Female = createIcon(SVG, 'Female');
