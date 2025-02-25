
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="briefcase" d="M13,7H11a3.00328,3.00328,0,0,1,3-3h4a3.00328,3.00328,0,0,1,3,3H19a1.001,1.001,0,0,0-1-1H14A1.001,1.001,0,0,0,13,7Zm15,5V24a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V12A3,3,0,0,1,7,9H25A3,3,0,0,1,28,12Zm-10,.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const Briefcase = createIcon(SVG, 'Briefcase');
