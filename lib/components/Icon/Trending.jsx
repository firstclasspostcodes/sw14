
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="trending" d="M29,9v8a1,1,0,0,1-1,1H26a1,1,0,0,1-1-1V14.82812l-7.79291,7.793a1.00022,1.00022,0,0,1-1.41418,0L12,18.82812,7.12115,23.707a1.00022,1.00022,0,0,1-1.41418,0L4.293,22.293a.99986.99986,0,0,1,0-1.41406l6.99988-7a1.00022,1.00022,0,0,1,1.41418,0L16.5,17.67188,22.17188,12H20a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1h8A1,1,0,0,1,29,9Z"/>
</svg>
);

export const Trending = createIcon(SVG, 'Trending');
