
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-horizontal" d="M27,15H26V12a.99943.99943,0,0,0-1-1H17a.99943.99943,0,0,0-1,1v3H14V7a1,1,0,0,0-1-1H5A1,1,0,0,0,4,7V25a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17h2v3a.99943.99943,0,0,0,1,1h8a.99943.99943,0,0,0,1-1V17h1a1,1,0,0,0,0-2Zm-3,4H18V13h6Z"/>
</svg>
);

export const AlignHorizontal = createIcon(SVG, 'AlignHorizontal');
