
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="video" d="M31,11v9a1,1,0,0,1-1,1H29l-5-3.43748v-4.125L29,10h1A1,1,0,0,1,31,11ZM20,8H6a2.00591,2.00591,0,0,0-2,2V21a2.00591,2.00591,0,0,0,2,2H20a2.00591,2.00591,0,0,0,2-2V10A2.00591,2.00591,0,0,0,20,8Z"/>
</svg>
);

export const Video = createIcon(SVG, 'Video');
