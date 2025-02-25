
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bookmark" d="M25,6V26.58582a1,1,0,0,1-1.70709.70715L16.5,20.5,9.70709,27.293A1,1,0,0,1,8,26.58582V6a2.00006,2.00006,0,0,1,2-2H23A2.00006,2.00006,0,0,1,25,6Z"/>
</svg>
);

export const Bookmark = createIcon(SVG, 'Bookmark');
