
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="file-plus" d="M26,14V27a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4H18.26331A7.96833,7.96833,0,0,0,26,14Zm6-8a6,6,0,1,1-6-6A6,6,0,0,1,32,6Zm-3-.5a.5.5,0,0,0-.5-.5H27V3.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V5H23.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H25V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V7h1.5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const FilePlus = createIcon(SVG, 'FilePlus');
