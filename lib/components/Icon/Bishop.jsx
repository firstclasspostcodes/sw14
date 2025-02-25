
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bishop" d="M11.0918,14A1.48591,1.48591,0,0,1,11,13.5v-1A1.5,1.5,0,0,1,12.5,11h6A1.5,1.5,0,0,1,20,12.5v1a1.48591,1.48591,0,0,1-.0918.5Zm7.86987-5A4.8055,4.8055,0,0,0,19,8.5C19,6.01465,17,3,15.5,3S12,6.01465,12,8.5a4.8055,4.8055,0,0,0,.03833.5ZM24,24H7a2,2,0,0,0-2,2v2H26V26A2,2,0,0,0,24,24ZM8.2074,22H22.7926a.5.5,0,0,0,.35358-.85352L18.29285,16.2926A.9939.9939,0,0,1,18.09729,16H12.90271a.9939.9939,0,0,1-.19556.2926L7.85382,21.14648A.5.5,0,0,0,8.2074,22Z"/>
</svg>
);

export const Bishop = createIcon(SVG, 'Bishop');
