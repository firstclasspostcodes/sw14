
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="eject" d="M8.069,16.69342l7.31183-8.93665a.79992.79992,0,0,1,1.23828,0L23.931,16.69342A.8.8,0,0,1,23.31183,18H8.68817A.8.8,0,0,1,8.069,16.69342ZM22.99933,21h-14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h14a1,1,0,0,0,1-1V22A1,1,0,0,0,22.99933,21Z"/>
</svg>
);

export const Eject = createIcon(SVG, 'Eject');
