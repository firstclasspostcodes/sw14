
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="monitor" d="M25.5,7H6.5A1.50039,1.50039,0,0,0,5,8.5v13A1.50039,1.50039,0,0,0,6.5,23h19A1.50039,1.50039,0,0,0,27,21.5V8.5A1.50039,1.50039,0,0,0,25.5,7ZM24,20H8V10H24Zm-4,6v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h6A1,1,0,0,1,20,26Z"/>
</svg>
);

export const Monitor = createIcon(SVG, 'Monitor');
