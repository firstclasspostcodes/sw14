
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="kiosk-food" d="M29,8.34338V9.5a.5.5,0,0,1-.5.5H3.5A.5.5,0,0,1,3,9.5V8.34338a.5.5,0,0,1,.3205-.46667L15.641,3.13806a1.00019,1.00019,0,0,1,.718,0L28.6795,7.87671A.5.5,0,0,1,29,8.34338ZM20.5,25A1.5,1.5,0,1,0,22,26.5,1.5,1.5,0,0,0,20.5,25Zm-9,0A1.5,1.5,0,1,0,13,26.5,1.5,1.5,0,0,0,11.5,25Zm14-9H17V12H15v4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8v5a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V18h1.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,25.5,16Z"/>
</svg>
);

export const KioskFood = createIcon(SVG, 'KioskFood');
