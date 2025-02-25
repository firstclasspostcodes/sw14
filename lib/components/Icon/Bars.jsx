
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bars" d="M9,24v3a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V24a1,1,0,0,1,1-1H8A1,1,0,0,1,9,24Zm5-4H12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V21A1,1,0,0,0,14,20Zm6-6H18a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V15A1,1,0,0,0,20,14Zm6-9H24a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V6A1,1,0,0,0,26,5Z"/>
</svg>
);

export const Bars = createIcon(SVG, 'Bars');
