
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mic" d="M11,15V13H21v2a5,5,0,0,1-10,0ZM21,9A5,5,0,0,0,11,9v2H21Zm3,2a1,1,0,0,0-1,1v3a6.627,6.627,0,0,1-7,7,6.627,6.627,0,0,1-7-7V12a1,1,0,0,0-2,0v3a8.52562,8.52562,0,0,0,7,8.80927V26H13a1,1,0,0,0-1,1v1h8V27a1,1,0,0,0-1-1H18V23.80927A8.52562,8.52562,0,0,0,25,15V12A1,1,0,0,0,24,11Z"/>
</svg>
);

export const Mic = createIcon(SVG, 'Mic');
