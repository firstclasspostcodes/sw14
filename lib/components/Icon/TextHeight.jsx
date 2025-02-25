
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-height" d="M28,5V8a.99943.99943,0,0,1-.99933,1h-1a1,1,0,0,1-1-1V7H20V24h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h1V7H11.00067V8a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1L8,5A1,1,0,0,1,9,4H27.00067A.99943.99943,0,0,1,28,5ZM5.23114,8a.50006.50006,0,0,0,.39728-.80371L3.39728,4.2771a.5.5,0,0,0-.79456,0L.37158,7.19629A.50006.50006,0,0,0,.76886,8H2V23H.76886a.50006.50006,0,0,0-.39728.80371L2.60272,26.7229a.5.5,0,0,0,.79456,0l2.23114-2.91919A.50006.50006,0,0,0,5.23114,23H4V8Z"/>
</svg>
);

export const TextHeight = createIcon(SVG, 'TextHeight');
