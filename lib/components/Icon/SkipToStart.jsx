
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="skip-to-start" d="M27.99933,9.46185V22.53821a.8.8,0,0,1-1.2312.67383L16.55219,16.67383a.8.8,0,0,1,0-1.34766L26.76813,8.788A.8.8,0,0,1,27.99933,9.46185ZM14.76813,8.788,4.55219,15.32617a.8.8,0,0,0,0,1.34766L14.76813,23.212a.8.8,0,0,0,1.2312-.67383V9.46185A.8.8,0,0,0,14.76813,8.788ZM3,8H2A1,1,0,0,0,1,9V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V9A1,1,0,0,0,3,8Z"/>
</svg>
);

export const SkipToStart = createIcon(SVG, 'SkipToStart');
