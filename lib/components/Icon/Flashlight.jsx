
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="flashlight_" data-name="flashlight
" d="M12,12.99976V26a2.00006,2.00006,0,0,0,2,2h4a2.00006,2.00006,0,0,0,2-2V12.99976L22.5,8H9.5Zm3,2.83349a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0ZM23,5V6H9V5a1,1,0,0,1,1-1H22A1,1,0,0,1,23,5Z"/>
</svg>
);

export const Flashlight = createIcon(SVG, 'Flashlight');
