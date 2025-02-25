
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hard-drive" d="M24,22H8a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V24A2,2,0,0,0,24,22Zm0,3.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM26,7V20.55634A3.95376,3.95376,0,0,0,24,20H8a3.95376,3.95376,0,0,0-2,.55634V7A3,3,0,0,1,9,4H23A3,3,0,0,1,26,7Z"/>
</svg>
);

export const HardDrive = createIcon(SVG, 'HardDrive');
