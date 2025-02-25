
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="file" d="M20,11h5.5a.5.5,0,0,1,.5.5V27a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4H18.5a.5.5,0,0,1,.5.5V10A1,1,0,0,0,20,11Zm1.5-2H26L21,4V8.5A.5.5,0,0,0,21.5,9Z"/>
</svg>
);

export const File = createIcon(SVG, 'File');
