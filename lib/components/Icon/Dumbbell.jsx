
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="dumbbell" d="M30,14.5v3a.5.5,0,0,1-.5.5H28v3a1,1,0,0,1-1,1H24v1a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1V18H12v5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V22H5a1,1,0,0,1-1-1V18H2.5a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5H4V11a1,1,0,0,1,1-1H8V9A1,1,0,0,1,9,8h2a1,1,0,0,1,1,1v5h8V9a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1h3a1,1,0,0,1,1,1v3h1.5A.5.5,0,0,1,30,14.5Z"/>
</svg>
);

export const Dumbbell = createIcon(SVG, 'Dumbbell');
