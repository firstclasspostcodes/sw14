
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="power-cord-plug-off" d="M13.21191,22.75488,24,11.9668V16a6.99549,6.99549,0,0,1-6,6.92041V28H14V22.92041A6.95307,6.95307,0,0,1,13.21191,22.75488ZM27.21484,2.93945a1.49946,1.49946,0,0,0-2.12109,0L21,7.0332V5.5a1.5,1.5,0,0,0-3,0V10H14V5.5a1.5,1.5,0,0,0-3,0V10H9.5A1.5,1.5,0,0,0,8,11.5V16a6.91093,6.91093,0,0,0,.8042,3.229L2.93945,25.09375a1.49984,1.49984,0,1,0,2.1211,2.12109L27.21484,5.06055A1.49946,1.49946,0,0,0,27.21484,2.93945Z"/>
</svg>
);

export const PowerCordPlugOff = createIcon(SVG, 'PowerCordPlugOff');
