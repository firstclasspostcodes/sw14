
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="directions" d="M28.06055,14.93945l-11-11a1.49947,1.49947,0,0,0-2.1211,0l-11,11a1.49947,1.49947,0,0,0,0,2.1211l11,11a1.49947,1.49947,0,0,0,2.1211,0l11-11A1.49947,1.49947,0,0,0,28.06055,14.93945ZM22.46667,15.9,17.8,19.4a.5.5,0,0,1-.8-.4V17H15v3.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-4A2.5,2.5,0,0,1,14.5,14H17V12a.5.5,0,0,1,.8-.4l4.66668,3.5A.5.5,0,0,1,22.46667,15.9Z"/>
</svg>
);

export const Directions = createIcon(SVG, 'Directions');
