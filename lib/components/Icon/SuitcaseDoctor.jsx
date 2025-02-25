
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="suitcase-doctor" d="M13,7H11a3.00328,3.00328,0,0,1,3-3h4a3.00328,3.00328,0,0,1,3,3H19a1.00067,1.00067,0,0,0-1-1H14A1.00067,1.00067,0,0,0,13,7Zm5.5,10H17V15.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V17H13.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V19h1.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,17ZM28,12V24a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V12A3,3,0,0,1,7,9H25A3,3,0,0,1,28,12Zm-7,6a5,5,0,1,0-5,5A5,5,0,0,0,21,18Z"/>
</svg>
);

export const SuitcaseDoctor = createIcon(SVG, 'SuitcaseDoctor');
