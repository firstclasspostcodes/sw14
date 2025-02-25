
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-width" d="M25.7229,26.39722l-2.91925,2.2312A.5.5,0,0,1,22,28.2312V27H10v1.2312a.5.5,0,0,1-.80365.39722L6.2771,26.39722a.49992.49992,0,0,1,0-.79444l2.91925-2.2312A.5.5,0,0,1,10,23.7688V25H22V23.7688a.5.5,0,0,1,.80365-.39722l2.91925,2.2312A.49992.49992,0,0,1,25.7229,26.39722ZM8.00067,9h1a1,1,0,0,0,1-1V7H14V19H13a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H18V7h4.00067V8a1,1,0,0,0,1,1h1A.99943.99943,0,0,0,25,8V5a.99943.99943,0,0,0-.99933-1H8A1,1,0,0,0,7,5l.00067,3A1,1,0,0,0,8.00067,9Z"/>
</svg>
);

export const TextWidth = createIcon(SVG, 'TextWidth');
