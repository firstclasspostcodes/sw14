
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pills" d="M26.53253,19.506a7.00242,7.00242,0,0,0-1.17132-1.99792,2.99625,2.99625,0,0,0-.704-3.094l-3.53565-3.53564L17,15H13.92871l-2-2A5.00016,5.00016,0,0,1,19,5.92871L26.07129,13A4.99553,4.99553,0,0,1,26.53253,19.506ZM25,22a5.00588,5.00588,0,0,1-5,5H10a5,5,0,0,1,0-10H20A5.00588,5.00588,0,0,1,25,22ZM15,19H10a3,3,0,0,0,0,6h5Z"/>
</svg>
);

export const Pills = createIcon(SVG, 'Pills');
