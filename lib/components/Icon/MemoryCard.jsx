
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="memory-card" d="M24.5,4h-13A1.5,1.5,0,0,0,10,5.5v6L6.5999,14.05054A1.5,1.5,0,0,0,6,15.25046V26.5A1.5,1.5,0,0,0,7.5,28h17A1.5,1.5,0,0,0,26,26.5V5.5A1.5,1.5,0,0,0,24.5,4ZM15,11H13V6h2Zm4,0H17V6h2Zm4,0H21V6h2Z"/>
</svg>
);

export const MemoryCard = createIcon(SVG, 'MemoryCard');
