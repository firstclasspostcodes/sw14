
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-hospital" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm7,18.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V18H13v4.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V9.5A.5.5,0,0,1,9.5,9h3a.5.5,0,0,1,.5.5V14h6V9.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const CircleHospital = createIcon(SVG, 'CircleHospital');
