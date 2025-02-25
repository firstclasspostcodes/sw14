
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hard-drive-lock" d="M31,4H30V2a2.0026,2.0026,0,0,0-2-2H25a2.0026,2.0026,0,0,0-2,2V4H22a1.003,1.003,0,0,0-1,1v6a1.003,1.003,0,0,0,1,1h9a1.003,1.003,0,0,0,1-1V5A1.003,1.003,0,0,0,31,4ZM25,2.25A.25.25,0,0,1,25.25,2h2.5a.25.25,0,0,1,.25.25V4H25ZM24,22H8a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V24A2,2,0,0,0,24,22Zm0,3.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM26,14v6.55634A3.95376,3.95376,0,0,0,24,20H8a3.95376,3.95376,0,0,0-2,.55634V7A3,3,0,0,1,9,4H19.17633A2.9764,2.9764,0,0,0,19,5v6a3.00328,3.00328,0,0,0,3,3Z"/>
</svg>
);

export const HardDriveLock = createIcon(SVG, 'HardDriveLock');
