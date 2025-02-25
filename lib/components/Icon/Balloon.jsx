
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="balloon" d="M24,14c0-5-3-10-8-10S8,9,8,14c0,4.75732,2.71985,10.408,7.29,10.94678L13.6,27.2a.5.5,0,0,0,.4.8h4a.5.5,0,0,0,.4-.8l-1.69-2.25317C21.28015,24.408,24,18.75732,24,14ZM12.792,10.76074A6.46482,6.46482,0,0,0,12,14a1,1,0,0,1-2,0,8.46954,8.46954,0,0,1,1.07129-4.25684.99953.99953,0,1,1,1.7207,1.01758Z"/>
</svg>
);

export const Balloon = createIcon(SVG, 'Balloon');
