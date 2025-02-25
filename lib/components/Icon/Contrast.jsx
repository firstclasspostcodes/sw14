
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="contrast" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21A9,9,0,0,1,16,7Z"/>
</svg>
);

export const Contrast = createIcon(SVG, 'Contrast');
