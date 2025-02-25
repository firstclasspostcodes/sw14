
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="sort" d="M25.07935,12H23v5a1,1,0,0,1-1,1H19a1,1,0,0,1-1-1V12H15.92065a1,1,0,0,1-.81921-1.57349l4.57935-6.54193a1,1,0,0,1,1.63842,0l4.57935,6.54193A1,1,0,0,1,25.07935,12Zm-9,8H14V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v5H6.92065a1,1,0,0,0-.81921,1.57343l4.57935,6.54193a1,1,0,0,0,1.63842,0l4.57935-6.54193A1,1,0,0,0,16.07935,20Z"/>
</svg>
);

export const Sort = createIcon(SVG, 'Sort');
