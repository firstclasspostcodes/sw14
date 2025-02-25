
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="kiosk" d="M27,5H5V4A2,2,0,0,1,7,2H25a2,2,0,0,1,2,2Zm-.5,14H26V15H24v4H8V15H6v4H5.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H6v3a1,1,0,0,0,2,0V24H24v3a1,1,0,0,0,2,0V24h.5a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,26.5,19Zm2.39441-8.21094L27,7H5L3.10559,10.78906A.99979.99979,0,0,0,3,11.23639V12a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1v-.76361A.99979.99979,0,0,0,28.89441,10.78906Z"/>
</svg>
);

export const Kiosk = createIcon(SVG, 'Kiosk');
