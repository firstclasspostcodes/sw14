
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-top" d="M15,9V27a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8h8A1,1,0,0,1,15,9ZM27,4H5A1,1,0,0,0,5,6H27a1,1,0,0,0,0-2Zm0,5v8a.99943.99943,0,0,1-1,1H18a.99943.99943,0,0,1-1-1V9a.99943.99943,0,0,1,1-1h8A.99943.99943,0,0,1,27,9Zm-2,1H19v6h6Z"/>
</svg>
);

export const AlignTop = createIcon(SVG, 'AlignTop');
