
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tablet" d="M23.5,3H8.5A2.50263,2.50263,0,0,0,6,5.5v21A2.50263,2.50263,0,0,0,8.5,29h15A2.50263,2.50263,0,0,0,26,26.5V5.5A2.50263,2.50263,0,0,0,23.5,3ZM17,26.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM23,23H9V6H23Z"/>
</svg>
);

export const Tablet = createIcon(SVG, 'Tablet');
