
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="start" d="M18,11v3H15V11Zm8-4V18a1,1,0,0,1-1,1H10v8a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4H9a1,1,0,0,1,1,1V6H25A1,1,0,0,1,26,7ZM24,8H21v3H18V8H15v3H12V8H9v3h3v3H9v3h3V14h3v3h3V14h3v3h3V14H21V11h3Z"/>
</svg>
);

export const Start = createIcon(SVG, 'Start');
