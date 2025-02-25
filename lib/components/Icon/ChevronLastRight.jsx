
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-last-right" d="M23.32849,15.29285a.99988.99988,0,0,1,0,1.41418L13.12115,26.91431a.50007.50007,0,0,1-.70715-.00013L9.58594,24.08569a.49993.49993,0,0,1,0-.707L16.96436,16,9.58594,8.62134a.49993.49993,0,0,1,0-.707L12.414,5.08569a.50007.50007,0,0,1,.70715,0ZM27,5H25a1,1,0,0,0-1,1V26a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Z"/>
</svg>
);

export const ChevronLastRight = createIcon(SVG, 'ChevronLastRight');
