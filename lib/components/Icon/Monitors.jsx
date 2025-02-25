
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="monitors" d="M21.5,11H4.5A1.50039,1.50039,0,0,0,3,12.5v12A1.50039,1.50039,0,0,0,4.5,26H10v1a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V26h5.5A1.50039,1.50039,0,0,0,23,24.5v-12A1.50039,1.50039,0,0,0,21.5,11ZM20,23H6V14H20ZM29,5.5v12A1.50039,1.50039,0,0,1,27.5,19H25V16h1V7H12V9H9V5.5A1.50039,1.50039,0,0,1,10.5,4h17A1.50039,1.50039,0,0,1,29,5.5Z"/>
</svg>
);

export const Monitors = createIcon(SVG, 'Monitors');
