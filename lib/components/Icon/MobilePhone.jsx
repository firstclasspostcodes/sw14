
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mobile-phone" d="M21.5,4h-11A2.50263,2.50263,0,0,0,8,6.5v19A2.50263,2.50263,0,0,0,10.5,28h11A2.50263,2.50263,0,0,0,24,25.5V6.5A2.50263,2.50263,0,0,0,21.5,4ZM17,25.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM21,22H11V7H21Z"/>
</svg>
);

export const MobilePhone = createIcon(SVG, 'MobilePhone');
