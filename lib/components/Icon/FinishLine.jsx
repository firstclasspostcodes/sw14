
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="finish-line" d="M21,11v3H18V11Zm-9,0v3h3V11ZM4,27.5V5A1,1,0,0,1,5,4H6A1,1,0,0,1,7,5V6H26V5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V27.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5V19H7v8.5a.5.5,0,0,1-.5.5h-2A.5.5,0,0,1,4,27.5ZM27,8H24v3H21V8H18v3H15V8H12v3H9V8H6v3H9v3H6v3H9V14h3v3h3V14h3v3h3V14h3v3h3V14H24V11h3Z"/>
</svg>
);

export const FinishLine = createIcon(SVG, 'FinishLine');
