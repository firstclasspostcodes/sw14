
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="sort-attributes" d="M26.89856,20.57343l-4.57935,6.54193a1,1,0,0,1-1.63842,0l-4.57935-6.54193A1,1,0,0,1,16.92065,19H19V6a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V19h2.07935A1,1,0,0,1,26.89856,20.57343ZM5,9H7A1,1,0,0,0,8,8V6A1,1,0,0,0,7,5H5A1,1,0,0,0,4,6V8A1,1,0,0,0,5,9Zm0,6H9a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v2A1,1,0,0,0,5,15Zm0,6h6a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v2A1,1,0,0,0,5,21Zm8,2H5a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V24A1,1,0,0,0,13,23Z"/>
</svg>
);

export const SortAttributes = createIcon(SVG, 'SortAttributes');
