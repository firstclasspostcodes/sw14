
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="export" d="M28,23v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1H27A1,1,0,0,1,28,23Zm.36078-11.81372L20.58124,5.62946A1,1,0,0,0,19,6.44318V9.05579c-4.94055.55084-8.98474,5.074-9.92914,8.87158a.86935.86935,0,0,0,.30957.87488.879.879,0,0,0,1.23114-.11322A9.74285,9.74285,0,0,1,19,14.97339v2.58343a1,1,0,0,0,1.58124.81372l7.77954-5.55682A1,1,0,0,0,28.36078,11.18628Z"/>
</svg>
);

export const Export = createIcon(SVG, 'Export');
