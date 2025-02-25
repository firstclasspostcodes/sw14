
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="video-off" d="M27.21484,5.06055,5.06055,27.21436a1.49984,1.49984,0,0,1-2.1211-2.1211l2.26276-2.26269A2.0053,2.0053,0,0,1,4,21V10A2.00591,2.00591,0,0,1,6,8H20c.01031,0,.02.00269.03027.00287l5.06348-5.06342a1.49984,1.49984,0,0,1,2.12109,2.1211ZM30,10H29l-5,3.43752v4.125L29,21h1a1,1,0,0,0,1-1V11A1,1,0,0,0,30,10ZM20,23a2.00591,2.00591,0,0,0,2-2V13.9671L12.96692,23Z"/>
</svg>
);

export const VideoOff = createIcon(SVG, 'VideoOff');
