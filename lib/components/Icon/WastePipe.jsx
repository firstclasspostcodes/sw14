
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="waste-pipe" d="M22,12.31067V10a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v2.31067a9,9,0,1,0,12,0Zm-.29126,8.52893a8.87337,8.87337,0,0,0-3.23315-.8562,4.72136,4.72136,0,0,0-2.708,1.02246,4.0095,4.0095,0,0,1-2.39649.89941A5.10932,5.10932,0,0,1,10.2002,20.5105a5.99744,5.99744,0,1,1,11.50854.3291ZM8,6V5A1,1,0,0,1,9,4H23a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H9A1,1,0,0,1,8,6Z"/>
</svg>
);

export const WastePipe = createIcon(SVG, 'WastePipe');
