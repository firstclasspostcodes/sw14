
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="radio" d="M20.07965,7h-5.1593l9.91949-4.17188a1.00009,1.00009,0,0,1,.77539,1.84376ZM28,10V25a.99943.99943,0,0,1-1,1H7a.99943.99943,0,0,1-1-1V17H5a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H6V10A.99943.99943,0,0,1,7,9H27A.99943.99943,0,0,1,28,10ZM25,22.5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5Zm0-10a.49987.49987,0,0,0-.5-.5H9.5a.49987.49987,0,0,0-.5.5v3a.49987.49987,0,0,0,.5.5h15a.49987.49987,0,0,0,.5-.5Z"/>
</svg>
);

export const Radio = createIcon(SVG, 'Radio');
