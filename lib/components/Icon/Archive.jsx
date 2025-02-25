
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="archive" d="M6,27a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V13H6Zm6-10a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1ZM28,7v4H4V7A1,1,0,0,1,5,6H27A1,1,0,0,1,28,7Z"/>
</svg>
);

export const Archive = createIcon(SVG, 'Archive');
