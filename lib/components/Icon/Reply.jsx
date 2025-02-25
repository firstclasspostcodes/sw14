
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="reply" d="M26.40662,22.60559l-.47077.23645a1.01142,1.01142,0,0,1-1.204-.2406A13.80216,13.80216,0,0,0,14.98926,18.002v3.4552a1,1,0,0,1-1.58124.81372L4.32965,15.78632a1,1,0,0,1,0-1.62751L13.408,7.67426a1,1,0,0,1,1.58124.81372v3.15051a15.76063,15.76063,0,0,1,11.90881,9.723A1.01258,1.01258,0,0,1,26.40662,22.60559Z"/>
</svg>
);

export const Reply = createIcon(SVG, 'Reply');
