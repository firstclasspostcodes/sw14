
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="curves" d="M15,11.5v1a.5.5,0,0,1-.5.5H13v1.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V13H9.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H11V9.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5V11h1.5A.5.5,0,0,1,15,11.5Zm13-4v17A3.50424,3.50424,0,0,1,24.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5V7.5A3.50424,3.50424,0,0,1,7.5,4h17A3.50424,3.50424,0,0,1,28,7.5Zm-4,14a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5Zm.85168-14.35168A.49852.49852,0,0,0,24.5,7H7.5a.50641.50641,0,0,0-.5.5v17a.4988.4988,0,0,0,.14832.35168Z"/>
</svg>
);

export const Curves = createIcon(SVG, 'Curves');
