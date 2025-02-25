
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="electric-cord" d="M28,17.5V28H25V17.5a2.5,2.5,0,0,0-5,0v4a5.5,5.5,0,0,1-11,0V17.28741A5.49854,5.49854,0,0,1,5.00037,12V9a1,1,0,0,1,1-1h1V5a1,1,0,0,1,2,0V8h3V5a1,1,0,0,1,2,0V8h1a1,1,0,0,1,1,1v3A5.49855,5.49855,0,0,1,12,17.28766V21.5a2.5,2.5,0,0,0,5,0v-4a5.5,5.5,0,0,1,11,0Z"/>
</svg>
);

export const ElectricCord = createIcon(SVG, 'ElectricCord');
