
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="computer" d="M26.499,21H5.5A1.50008,1.50008,0,0,0,4,22.5v5A1.50008,1.50008,0,0,0,5.5,29H26.499a1.50007,1.50007,0,0,0,1.5-1.5v-5A1.50007,1.50007,0,0,0,26.499,21ZM13,25.5a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5Zm13,1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM7.5,19h17A1.50008,1.50008,0,0,0,26,17.5V5.5A1.50008,1.50008,0,0,0,24.5,4H7.5A1.50008,1.50008,0,0,0,6,5.5v12A1.50008,1.50008,0,0,0,7.5,19ZM9,7H23v9H9Z"/>
</svg>
);

export const Computer = createIcon(SVG, 'Computer');
