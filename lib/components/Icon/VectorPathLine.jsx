
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vector-path-line" d="M28,3H23a1,1,0,0,0-1,1V7.87891L7.87891,22H4a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V24.12109L24.12109,10H28a1,1,0,0,0,1-1V4A1,1,0,0,0,28,3ZM8,27H5V24H8ZM27,8H24V5h3Z"/>
</svg>
);

export const VectorPathLine = createIcon(SVG, 'VectorPathLine');
