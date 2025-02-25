
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="phone-horizontal" d="M25.5,8H6.5A2.50231,2.50231,0,0,0,4,10.5v11A2.50231,2.50231,0,0,0,6.5,24h19A2.50231,2.50231,0,0,0,28,21.5v-11A2.50231,2.50231,0,0,0,25.5,8ZM22,21H7V11H22Zm4-4.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const PhoneHorizontal = createIcon(SVG, 'PhoneHorizontal');
