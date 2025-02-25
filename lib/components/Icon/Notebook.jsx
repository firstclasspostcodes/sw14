
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="notebook" d="M28.5,22H27V9.5A2.50263,2.50263,0,0,0,24.5,7H6.5A2.50263,2.50263,0,0,0,4,9.5V22H2.5a.5.5,0,0,0-.5.5V24a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V22.5A.5.5,0,0,0,28.5,22ZM24,21H7V10H24Z"/>
</svg>
);

export const Notebook = createIcon(SVG, 'Notebook');
