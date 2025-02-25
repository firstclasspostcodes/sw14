
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-smaller" d="M27.62842,12.80371,25.39728,15.7229a.47526.47526,0,0,1-.79456,0l-2.23114-2.91919C22.03375,12.36157,22.21252,12,22.76886,12H24V9.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5V12h1.23114C27.78748,12,27.96625,12.36157,27.62842,12.80371ZM19.00067,12H8a1,1,0,0,0-1,1l.00067,3a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V15H12v9H11a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V25a1,1,0,0,0-1-1H15V15h2.00067v1a1,1,0,0,0,1,1h1A.99943.99943,0,0,0,20,16V13A.99943.99943,0,0,0,19.00067,12Z"/>
</svg>
);

export const TextSmaller = createIcon(SVG, 'TextSmaller');
