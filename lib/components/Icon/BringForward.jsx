
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bring-forward" d="M15,7H8A1,1,0,0,0,7,8v7H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h9a1,1,0,0,1,1,1Zm8,3.5v11A1.50039,1.50039,0,0,1,21.5,23h-11A1.50039,1.50039,0,0,1,9,21.5v-11A1.50039,1.50039,0,0,1,10.5,9h11A1.50039,1.50039,0,0,1,23,10.5ZM20,12H12v8h8Z"/>
</svg>
);

export const BringForward = createIcon(SVG, 'BringForward');
