
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hard-drive-eject" d="M24,22H8a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V24A2,2,0,0,0,24,22Zm0,3.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM26,12v8.55634A3.95376,3.95376,0,0,0,24,20H8a3.95376,3.95376,0,0,0-2,.55634V7A3,3,0,0,1,9,4H22.55054A1.77785,1.77785,0,0,0,22,5.2818V9.5A2.50294,2.50294,0,0,0,24.5,12Zm5.83186-6.81662L28.387.973a.5.5,0,0,0-.774,0L24.16815,5.18338A.5.5,0,0,0,24.55512,6h6.88976A.5.5,0,0,0,31.83186,5.18338ZM31.5,10h-7a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,31.5,10Z"/>
</svg>
);

export const HardDriveEject = createIcon(SVG, 'HardDriveEject');
