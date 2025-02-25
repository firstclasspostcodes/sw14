
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-last-up" d="M26.91425,19.58594l-2.8285,2.82812a.49988.49988,0,0,1-.70709,0L16,15.03564,8.62134,22.41406a.49988.49988,0,0,1-.70709,0l-2.8285-2.82812a.49993.49993,0,0,1,0-.707L15.29291,8.67139a1.00022,1.00022,0,0,1,1.41418,0L26.91425,18.87891A.49993.49993,0,0,1,26.91425,19.58594ZM6,8H26a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H6A1,1,0,0,0,5,5V7A1,1,0,0,0,6,8Z"/>
</svg>
);

export const ChevronLastUp = createIcon(SVG, 'ChevronLastUp');
