
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="book" d="M9,24a1.00115,1.00115,0,0,0,1,1H26v2a1,1,0,0,1-1,1H10a4,4,0,0,1-4-4V8a3.99992,3.99992,0,0,1,4-4H25a1,1,0,0,1,1,1V23H10A1.00115,1.00115,0,0,0,9,24Z"/>
</svg>
);

export const Book = createIcon(SVG, 'Book');
