
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="paragraph-right" d="M28,6V7a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V6a1,1,0,0,1,1-1H27A1,1,0,0,1,28,6Zm-1,5H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0,6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Zm0,6H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Z"/>
</svg>
);

export const ParagraphRight = createIcon(SVG, 'ParagraphRight');
