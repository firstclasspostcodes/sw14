
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="equalizer-bars" d="M7,15v2a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H6A1,1,0,0,1,7,15Zm4-8H10A1,1,0,0,0,9,8V24a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V8A1,1,0,0,0,11,7Zm5,4H15a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V12A1,1,0,0,0,16,11Zm5-7H20a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4Zm5,10H25a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V15A1,1,0,0,0,26,14Z"/>
</svg>
);

export const EqualizerBars = createIcon(SVG, 'EqualizerBars');
