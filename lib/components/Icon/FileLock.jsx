
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="file-lock" d="M22,14h4V27a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4H19.17633A2.97586,2.97586,0,0,0,19,5v6A3.00328,3.00328,0,0,0,22,14ZM32,5v6a1.00291,1.00291,0,0,1-1,1H22a1.00291,1.00291,0,0,1-1-1V5a1.00291,1.00291,0,0,1,1-1h1V2a2.0026,2.0026,0,0,1,2-2h3a2.0026,2.0026,0,0,1,2,2V4h1A1.00291,1.00291,0,0,1,32,5ZM28,2.25A.25.25,0,0,0,27.75,2h-2.5a.25.25,0,0,0-.25.25V4h3Z"/>
</svg>
);

export const FileLock = createIcon(SVG, 'FileLock');
