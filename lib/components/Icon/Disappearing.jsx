
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="disappearing" d="M29,15v8a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h2.17188L16.5,14.32812l-3.79291,3.793a1.00022,1.00022,0,0,1-1.41418,0l-6.99988-7a.99986.99986,0,0,1,0-1.41406L5.707,8.293a1.00022,1.00022,0,0,1,1.41418,0L12,13.17188l3.79291-3.793a1.00022,1.00022,0,0,1,1.41418,0L25,17.17188V15a1,1,0,0,1,1-1h2A1,1,0,0,1,29,15Z"/>
</svg>
);

export const Disappearing = createIcon(SVG, 'Disappearing');
