
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-right" d="M24,18v8a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1H23A1,1,0,0,1,24,18ZM27,4a1,1,0,0,0-1,1V27a1,1,0,0,0,2,0V5A1,1,0,0,0,27,4ZM24,6v8a.99943.99943,0,0,1-1,1H15a.99943.99943,0,0,1-1-1V6a.99943.99943,0,0,1,1-1h8A.99943.99943,0,0,1,24,6ZM22,7H16v6h6Z"/>
</svg>
);

export const AlignRight = createIcon(SVG, 'AlignRight');
