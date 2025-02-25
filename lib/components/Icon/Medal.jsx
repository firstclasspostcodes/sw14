
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="medal" d="M20.27692,12.24268,16.86108,6.55029,18.56122,4h7.21094ZM15.5,11a9.49752,9.49752,0,0,1,1.80475.17694L12.99847,4H6.00122l4.91187,8.18622A9.43684,9.43684,0,0,1,15.5,11Zm0,2A7.5,7.5,0,1,0,23,20.5,7.5,7.5,0,0,0,15.5,13Z"/>
</svg>
);

export const Medal = createIcon(SVG, 'Medal');
