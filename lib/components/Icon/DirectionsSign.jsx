
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="directions-sign" d="M27.53906,8.884l-2.26092,1.88416A.9999.9999,0,0,1,24.63794,11H12a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1h2V5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V6h7.63794a1.00045,1.00045,0,0,1,.6402.23169l2.26092,1.88415A.5.5,0,0,1,27.53906,8.884ZM20,15H17V13H14v2H7.36206a1.00045,1.00045,0,0,0-.6402.23169L4.46094,17.11584a.5.5,0,0,0,0,.76819l2.26092,1.88416A.9999.9999,0,0,0,7.36206,20H20a1,1,0,0,0,1-1V16A1,1,0,0,0,20,15ZM14,28h3V22H14Z"/>
</svg>
);

export const DirectionsSign = createIcon(SVG, 'DirectionsSign');
