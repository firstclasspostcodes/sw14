
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="gift" d="M6,18h8V28H7a1,1,0,0,1-1-1ZM18,28h7a1,1,0,0,0,1-1V18H18ZM28,12v4H18V13.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V16H4V12a1,1,0,0,1,1-1H8.90979L8.382,10.73608a2.5,2.5,0,0,1-.44373-4.18823l2.5-2a2.49995,2.49995,0,0,1,3.74713.738L16,8.55225l1.81464-3.26636a2.5,2.5,0,0,1,3.74713-.738l2.5,2a2.5,2.5,0,0,1-.44373,4.18823L23.09021,11H27A1,1,0,0,1,28,12ZM14.5,11,12,6.5l-2.5,2Zm8-2.5L20,6.5,17.5,11Z"/>
</svg>
);

export const Gift = createIcon(SVG, 'Gift');
