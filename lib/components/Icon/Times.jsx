
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="times" d="M20.24249,16l5.65692,5.65674-4.24218,4.24267L16,20.24237l-5.65723,5.657L6.10059,21.65674,11.75751,16,6.10059,10.34326l4.24218-4.24267L16,11.75763l5.65723-5.657,4.24218,4.24267Z"/>
</svg>
);

export const Times = createIcon(SVG, 'Times');
