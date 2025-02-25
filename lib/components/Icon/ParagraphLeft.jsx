
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="paragraph-left" d="M4,7V6A1,1,0,0,1,5,5H16a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7Zm23,4H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11ZM5,20H18a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v1A1,1,0,0,0,5,20Zm22,3H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Z"/>
</svg>
);

export const ParagraphLeft = createIcon(SVG, 'ParagraphLeft');
