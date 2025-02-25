
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bullets" d="M5,25h6v2a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Zm8,2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V25H13Zm8,0a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V25H21ZM10.5,12h-5a.5.5,0,0,0-.5.5V23h6V12.5A.5.5,0,0,0,10.5,12Zm8,0h-5a.5.5,0,0,0-.5.5V23h6V12.5A.5.5,0,0,0,18.5,12Zm8,0h-5a.5.5,0,0,0-.5.5V23h6V12.5A.5.5,0,0,0,26.5,12ZM10,7,8.4472,3.89441a.5.5,0,0,0-.8944,0L6,7v3h4Zm8,0L16.4472,3.89441a.5.5,0,0,0-.8944,0L14,7v3h4Zm8,0L24.4472,3.89441a.5.5,0,0,0-.8944,0L22,7v3h4Z"/>
</svg>
);

export const Bullets = createIcon(SVG, 'Bullets');
