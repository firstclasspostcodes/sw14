
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-left" d="M27,14v4a1,1,0,0,1-1,1H16v3.47937a1,1,0,0,1-1.57349.81921L5.17035,16.81921a.99994.99994,0,0,1,0-1.63842l9.25616-6.47937A1,1,0,0,1,16,9.52063V13H26A1,1,0,0,1,27,14Z"/>
</svg>
);

export const ArrowLeft = createIcon(SVG, 'ArrowLeft');
