
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="switch" d="M18,19v3a1,1,0,0,1-1,1H12v2.07928a1,1,0,0,1-1.57349.81928L3.88464,21.31921a1,1,0,0,1,0-1.63848l6.54187-4.57935A1,1,0,0,1,12,15.92065V18h5A1,1,0,0,1,18,19Zm10.11536-8.31927L21.57349,6.10138A1,1,0,0,0,20,6.92065V9H15a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h5v2.07928a1,1,0,0,0,1.57349.81928l6.54187-4.57935A1,1,0,0,0,28.11536,10.68073Z"/>
</svg>
);

export const Switch = createIcon(SVG, 'Switch');
