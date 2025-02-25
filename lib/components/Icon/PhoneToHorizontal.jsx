
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="phone-to-horizontal" d="M16.5,4H5.5A2.50231,2.50231,0,0,0,3,6.5v19A2.50231,2.50231,0,0,0,5.5,28h11A2.50231,2.50231,0,0,0,19,25.5V6.5A2.50231,2.50231,0,0,0,16.5,4ZM12,25.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM16,22H6V7H16Zm15-6.5v10A2.50231,2.50231,0,0,1,28.5,28H21V25h7V16H21V13h7.5A2.50231,2.50231,0,0,1,31,15.5ZM24,5H22V3h2a3.00328,3.00328,0,0,1,3,3V7h1.23114c.55634,0,.73511.36163.39728.80359L26.39728,10.7229a.47526.47526,0,0,1-.79456,0L23.37158,7.80359C23.03375,7.36163,23.21252,7,23.76886,7H25V6A1.00067,1.00067,0,0,0,24,5Z"/>
</svg>
);

export const PhoneToHorizontal = createIcon(SVG, 'PhoneToHorizontal');
