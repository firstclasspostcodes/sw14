
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="kiosk-wheels" d="M27,5H5V4A2,2,0,0,1,7,2H25a2,2,0,0,1,2,2Zm0,17.0556a3.49325,3.49325,0,1,1-5.958,2.86115l-10.3753-1.88642a3.49571,3.49571,0,1,1-5.6211-1.022L5,22V19.5a.5.5,0,0,1,.5-.5H6V15H8v4H24V15h2v4h.5a.5.5,0,0,1,.5.5ZM9,24.5A1.5,1.5,0,1,0,7.5,26,1.50172,1.50172,0,0,0,9,24.5Zm17,0A1.5,1.5,0,1,0,24.5,26,1.50172,1.50172,0,0,0,26,24.5Zm2.89441-13.71094L27,7H5L3.10559,10.78906A.99979.99979,0,0,0,3,11.23639V12a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1v-.76361A.99979.99979,0,0,0,28.89441,10.78906Z"/>
</svg>
);

export const KioskWheels = createIcon(SVG, 'KioskWheels');
