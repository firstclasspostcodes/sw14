
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bring-to-front" d="M8,7A1,1,0,0,0,7,8v7H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h9a1,1,0,0,1,1,1V7ZM27,17H25v7a1,1,0,0,1-1,1H17v2a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Zm-5.5,6h-11A1.50039,1.50039,0,0,1,9,21.5v-11A1.50039,1.50039,0,0,1,10.5,9h11A1.50039,1.50039,0,0,1,23,10.5v11A1.50039,1.50039,0,0,1,21.5,23ZM20,12H12v8h8Z"/>
</svg>
);

export const BringToFront = createIcon(SVG, 'BringToFront');
