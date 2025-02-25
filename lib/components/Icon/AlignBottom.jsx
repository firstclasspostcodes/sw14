
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-bottom" d="M5,23V5A1,1,0,0,1,6,4h8a1,1,0,0,1,1,1V23a1,1,0,0,1-1,1H6A1,1,0,0,1,5,23Zm22,3H5a1,1,0,0,0,0,2H27a1,1,0,0,0,0-2ZM17,23V15a.99943.99943,0,0,1,1-1h8a.99943.99943,0,0,1,1,1v8a.99943.99943,0,0,1-1,1H18A.99943.99943,0,0,1,17,23Zm2-1h6V16H19Z"/>
</svg>
);

export const AlignBottom = createIcon(SVG, 'AlignBottom');
