
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="print" d="M10,22H22v5a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1ZM23,5a1,1,0,0,0-1-1H10A1,1,0,0,0,9,5V9H23Zm5,8V23a2.00591,2.00591,0,0,1-2,2H24V21a1.00291,1.00291,0,0,0-1-1H9a1.00291,1.00291,0,0,0-1,1v4H6a2.00591,2.00591,0,0,1-2-2V13a2.00591,2.00591,0,0,1,2-2H26A2.00591,2.00591,0,0,1,28,13Zm-2,.5a.5.5,0,0,0-.5-.5H23.49872a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H25.5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const Print = createIcon(SVG, 'Print');
