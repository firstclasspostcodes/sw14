
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="intersex" d="M28,3H22a1,1,0,0,0-1,1V5a1,1,0,0,0,1,1h1.87891L21.27917,8.59961A7.99378,7.99378,0,1,0,15,22.854V25H13a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V28h2a1,1,0,0,0,1-1V26a1,1,0,0,0-1-1H18V22.854a7.97724,7.97724,0,0,0,5.30542-12.03833L26,8.12109V10a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V4A1,1,0,0,0,28,3ZM16.5,20a5,5,0,1,1,5-5A5.00588,5.00588,0,0,1,16.5,20Z"/>
</svg>
);

export const Intersex = createIcon(SVG, 'Intersex');
