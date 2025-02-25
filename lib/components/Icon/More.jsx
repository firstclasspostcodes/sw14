
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="more" d="M27,16a3,3,0,1,1-3-3A3,3,0,0,1,27,16ZM16,13a3,3,0,1,0,3,3A3,3,0,0,0,16,13ZM8,13a3,3,0,1,0,3,3A3,3,0,0,0,8,13Z"/>
</svg>
);

export const More = createIcon(SVG, 'More');
