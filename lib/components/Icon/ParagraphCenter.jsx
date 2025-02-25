
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="paragraph-center" d="M10,7V6a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H11A1,1,0,0,1,10,7Zm17,4H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm-4,9a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1Zm4,3H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Z"/>
</svg>
);

export const ParagraphCenter = createIcon(SVG, 'ParagraphCenter');
