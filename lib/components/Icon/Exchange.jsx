
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="exchange" d="M7,12V9A1,1,0,0,1,8,8H9v5H8A1,1,0,0,1,7,12Zm5,3.92065a1,1,0,0,0-1.57349-.81927L3.88464,19.68073a1,1,0,0,0,0,1.63848l6.54187,4.57935A1,1,0,0,0,12,25.07928V23h5V18H12ZM13,8H11v5h2ZM24,18H23v5h1a1,1,0,0,0,1-1V19A1,1,0,0,0,24,18Zm4.11536-8.31927L21.57349,5.10138A1,1,0,0,0,20,5.92065V8H15v5h5v2.07928a1,1,0,0,0,1.57349.81928l6.54187-4.57935A1,1,0,0,0,28.11536,9.68073ZM19,23h2V18H19Z"/>
</svg>
);

export const Exchange = createIcon(SVG, 'Exchange');
