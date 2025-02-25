
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="import" d="M28,23v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1H27A1,1,0,0,1,28,23ZM12.36456,13.56439l-1.82934,1.82935a1,1,0,0,0,.54272,1.69348l9.43018,1.57172a1,1,0,0,0,1.15082-1.15082L20.08722,8.07788a1,1,0,0,0-1.69348-.54266L16.54907,9.37988C12.6662,6.27362,6.60645,6.61182,3.2525,8.62982a.86945.86945,0,0,0-.39972.83753.87894.87894,0,0,0,.95056.79052A9.74381,9.74381,0,0,1,12.36456,13.56439Z"/>
</svg>
);

export const Import = createIcon(SVG, 'Import');
