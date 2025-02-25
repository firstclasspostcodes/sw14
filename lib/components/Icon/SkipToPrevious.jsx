
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="skip-to-previous" d="M22.99933,9.46185V22.53821a.8.8,0,0,1-1.2312.67383L11.55219,16.67383a.8.8,0,0,1,0-1.34766L21.76813,8.788A.8.8,0,0,1,22.99933,9.46185ZM10,8H9A1,1,0,0,0,8,9V23a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V9A1,1,0,0,0,10,8Z"/>
</svg>
);

export const SkipToPrevious = createIcon(SVG, 'SkipToPrevious');
