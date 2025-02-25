
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="slightly-frowning" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25ZM11,13.5v-1a1.5,1.5,0,0,1,3,0v1a1.5,1.5,0,0,1-3,0Zm10-1v1a1.5,1.5,0,0,1-3,0v-1a1.5,1.5,0,0,1,3,0Zm-.21094,6.88623A1.00019,1.00019,0,0,1,19.55371,20.895,9.37929,9.37929,0,0,0,16,20a9.37929,9.37929,0,0,0-3.55371.895,1.00014,1.00014,0,0,1-1.23535-1.50879A6.542,6.542,0,0,1,16,17,6.542,6.542,0,0,1,20.78906,19.38623Z"/>
</svg>
);

export const SlightlyFrowning = createIcon(SVG, 'SlightlyFrowning');
