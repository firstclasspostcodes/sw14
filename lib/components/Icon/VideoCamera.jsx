
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="video-camera" d="M22,9H15L13,7H2A1,1,0,0,0,1,8v2a1,1,0,0,0,1,1H4V23a2.00591,2.00591,0,0,0,2,2H22a2.00591,2.00591,0,0,0,2-2V11A2.00591,2.00591,0,0,0,22,9Zm0,4.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Zm10-1v9a.5.5,0,0,1-.5.5H30l-4-2.5v-5L30,12h1.5A.5.5,0,0,1,32,12.5Z"/>
</svg>
);

export const VideoCamera = createIcon(SVG, 'VideoCamera');
