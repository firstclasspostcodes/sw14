
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-up" d="M26.91425,19.586l-2.8285,2.82806a.5.5,0,0,1-.70709,0L16,15.03564,8.62134,22.41406a.5.5,0,0,1-.70709,0L5.08575,19.586a.50007.50007,0,0,1,0-.70715L15.29291,8.67151a.99988.99988,0,0,1,1.41418,0L26.91425,18.87885A.50007.50007,0,0,1,26.91425,19.586Z"/>
</svg>
);

export const ChevronUp = createIcon(SVG, 'ChevronUp');
