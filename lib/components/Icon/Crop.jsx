
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="crop" d="M20,11H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H7V4A1,1,0,0,1,8,3h2a1,1,0,0,1,1,1V7H23a1,1,0,0,1,1,1V18H20Zm7,9H11V13H7V23a1,1,0,0,0,1,1H20v3a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V24h3a1,1,0,0,0,1-1V21A1,1,0,0,0,27,20Z"/>
</svg>
);

export const Crop = createIcon(SVG, 'Crop');
