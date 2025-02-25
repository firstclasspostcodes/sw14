
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="envelope-full" d="M8,11.01392,3.986,7,14.58167.294A2.27987,2.27987,0,0,1,16,0a2.06186,2.06186,0,0,1,1.39038.294L27.986,7,24,10.98608V7.5a.5.5,0,0,0-.5-.5H8.5a.5.5,0,0,0-.5.5Zm-4,11.158L10.17169,16,4,9.82812ZM21.82825,16,28,22.17188V9.82812ZM11.986,17l-8,8h24l-8-8Z"/>
</svg>
);

export const EnvelopeFull = createIcon(SVG, 'EnvelopeFull');
