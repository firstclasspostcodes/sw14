
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="equals" d="M26,11v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H25A1,1,0,0,1,26,11Zm-1,7H7a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V19A1,1,0,0,0,25,18Z"/>
</svg>
);

export const Equals = createIcon(SVG, 'Equals');
