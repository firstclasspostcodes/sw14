
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-menu" d="M23.5,5H8.5A3.50424,3.50424,0,0,0,5,8.5v15A3.50424,3.50424,0,0,0,8.5,27h15A3.50424,3.50424,0,0,0,27,23.5V8.5A3.50424,3.50424,0,0,0,23.5,5ZM21,20.5a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm0-4a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm0-4a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const SquareMenu = createIcon(SVG, 'SquareMenu');
