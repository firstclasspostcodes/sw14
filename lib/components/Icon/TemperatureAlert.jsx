
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="temperature-alert" d="M31.78027,10.71777l-5.5-9a1.50068,1.50068,0,0,0-2.56054,0l-5.5,9A1.50023,1.50023,0,0,0,19.5,13h11a1.50023,1.50023,0,0,0,1.28027-2.28223ZM26,10.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm0-3a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM16,8.08594a4,4,0,0,0-8,0V18.835a5.50005,5.50005,0,1,0,8,0ZM12,25.08545a2.49807,2.49807,0,0,1-1-4.78809V14.08545a1,1,0,0,1,2,0v6.21191a2.49807,2.49807,0,0,1-1,4.78809Z"/>
</svg>
);

export const TemperatureAlert = createIcon(SVG, 'TemperatureAlert');
