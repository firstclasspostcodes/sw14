
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="stats-bars" d="M29,26v1a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1H5V22a1,1,0,0,1,1-1H8a1,1,0,0,1,1,1v3h2V16a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v9h2V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V25h2V12a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V25h1A1,1,0,0,1,29,26Z"/>
</svg>
);

export const StatsBars = createIcon(SVG, 'StatsBars');
