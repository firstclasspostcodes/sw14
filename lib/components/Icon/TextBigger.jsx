
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-bigger" d="M28.23114,8H27v6.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V8H23.76886c-.55634,0-.73511-.36157-.39728-.80371L25.60272,4.2771a.47526.47526,0,0,1,.79456,0l2.23114,2.91919C28.96625,7.63843,28.78748,8,28.23114,8ZM20.00067,6H4A1,1,0,0,0,3,7l.00067,3a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V9H10V24H9a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V25a1,1,0,0,0-1-1H14V9h4.00067v1a1,1,0,0,0,1,1h1A.99943.99943,0,0,0,21,10V7A.99943.99943,0,0,0,20.00067,6Z"/>
</svg>
);

export const TextBigger = createIcon(SVG, 'TextBigger');
