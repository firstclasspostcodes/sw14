
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pause" d="M14,7V25a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V7A1,1,0,0,1,8,6h5A1,1,0,0,1,14,7Zm9-1H18a1,1,0,0,0-1,1V25a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V7A1,1,0,0,0,23,6Z"/>
</svg>
);

export const Pause = createIcon(SVG, 'Pause');
