
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="power-cord-plug" d="M24,11.5V16a6.99549,6.99549,0,0,1-6,6.92041V28H14V22.92041A6.99549,6.99549,0,0,1,8,16V11.5A1.5,1.5,0,0,1,9.5,10H11V5.5a1.5,1.5,0,0,1,3,0V10h4V5.5a1.5,1.5,0,0,1,3,0V10h1.5A1.5,1.5,0,0,1,24,11.5Z"/>
</svg>
);

export const PowerCordPlug = createIcon(SVG, 'PowerCordPlug');
