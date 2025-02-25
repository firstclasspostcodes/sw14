
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="paragraph-justify" d="M28,24v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V24a1,1,0,0,1,1-1H27A1,1,0,0,1,28,24Zm-1-7H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Zm0-6H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H9A1,1,0,0,0,8,6V7A1,1,0,0,0,9,8H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Z"/>
</svg>
);

export const ParagraphJustify = createIcon(SVG, 'ParagraphJustify');
