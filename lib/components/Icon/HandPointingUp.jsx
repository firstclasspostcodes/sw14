
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-pointing-up" d="M22,25v4H11V25a1,1,0,0,1,1-1h9A1,1,0,0,1,22,25Zm-.29779-13.48676L15,9V3.5a1.5,1.5,0,0,0-3,0V15a1,1,0,0,1-2,0V12.20709a.5.5,0,0,0-.85358-.35357l-.5606.56066A1.99982,1.99982,0,0,0,8,13.82843v4.343a2,2,0,0,0,.58582,1.4143L11,22H21.5l1.215-2.025A2.00018,2.00018,0,0,0,23,18.94592V13.386A2.00006,2.00006,0,0,0,21.70221,11.51324Z"/>
</svg>
);

export const HandPointingUp = createIcon(SVG, 'HandPointingUp');
