
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="flash" d="M23.484,14.60754l-9.94336,13A1.00014,1.00014,0,0,1,12.74628,28h-.22174a1,1,0,0,1-.96955-1.245L13.76727,18H7.76416a1,1,0,0,1-.80072-1.59906l8.977-12A.9999.9999,0,0,1,16.74115,4h.249a1,1,0,0,1,.97559,1.21967L16.21356,13H22.6897A1,1,0,0,1,23.484,14.60754Z"/>
</svg>
);

export const Flash = createIcon(SVG, 'Flash');
