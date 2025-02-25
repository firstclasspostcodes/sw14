
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-vertical" d="M25,18H17V16h3a.99943.99943,0,0,0,1-1V7a.99943.99943,0,0,0-1-1H17V5a1,1,0,0,0-2,0V6H12a.99943.99943,0,0,0-1,1v8a.99943.99943,0,0,0,1,1h3v2H7a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V19A1,1,0,0,0,25,18ZM13,14V8h6v6Z"/>
</svg>
);

export const AlignVertical = createIcon(SVG, 'AlignVertical');
