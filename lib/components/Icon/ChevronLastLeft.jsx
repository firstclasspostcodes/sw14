
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-last-left" d="M22.41406,23.37866a.49993.49993,0,0,1,0,.707L19.586,26.91418a.50007.50007,0,0,1-.70715.00013L8.67151,16.707a.99988.99988,0,0,1,0-1.41418L18.87885,5.08569a.50007.50007,0,0,1,.70715,0l2.82806,2.82862a.49993.49993,0,0,1,0,.707L15.03564,16ZM7,5H5A1,1,0,0,0,4,6V26a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V6A1,1,0,0,0,7,5Z"/>
</svg>
);

export const ChevronLastLeft = createIcon(SVG, 'ChevronLastLeft');
