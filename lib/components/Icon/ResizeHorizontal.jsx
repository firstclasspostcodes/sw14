
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="resize-horizontal" d="M15,14v3a1,1,0,0,1-1,1H11v1.94458a1,1,0,0,1-1.61725.78662L3.71722,16.28674a1,1,0,0,1,0-1.57361l5.66553-4.44445A1,1,0,0,1,11,11.05542V13h3A1,1,0,0,1,15,14Zm13.28278.71313-5.66553-4.44445A1,1,0,0,0,21,11.05542V13H18a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h3v1.94458a1,1,0,0,0,1.61725.78662l5.66553-4.44446A1,1,0,0,0,28.28278,14.71313Z"/>
</svg>
);

export const ResizeHorizontal = createIcon(SVG, 'ResizeHorizontal');
