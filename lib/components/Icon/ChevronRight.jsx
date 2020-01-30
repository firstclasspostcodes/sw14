
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-right" d="M23.32849,16.70709,13.12115,26.91425a.50007.50007,0,0,1-.70715,0l-2.82806-2.8285a.5.5,0,0,1,0-.70709L16.96436,16,9.58594,8.62134a.5.5,0,0,1,0-.70709L12.414,5.08575a.50007.50007,0,0,1,.70715,0L23.32849,15.29291A.99988.99988,0,0,1,23.32849,16.70709Z"/>
</svg>
);

export const ChevronRight = createIcon(SVG, 'ChevronRight');
