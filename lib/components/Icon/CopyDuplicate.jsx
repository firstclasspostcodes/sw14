
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="copy-duplicate" d="M23,15.5V11l5,5H23.5A.5.5,0,0,1,23,15.5ZM11,10V4.5a.5.5,0,0,0-.5-.5H6A1,1,0,0,0,5,5V20a1,1,0,0,0,1,1h7V12a2.97194,2.97194,0,0,1,.18372-1H12A1,1,0,0,1,11,10Zm10,7V11.5a.5.5,0,0,0-.5-.5H16a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18.5a.5.5,0,0,0-.5-.5H22A1,1,0,0,1,21,17ZM13,4V8.5a.5.5,0,0,0,.5.5H18Z"/>
</svg>
);

export const CopyDuplicate = createIcon(SVG, 'CopyDuplicate');
