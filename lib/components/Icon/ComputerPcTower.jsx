
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="computer-pc-tower" d="M2.5,8H17v3H4v9H17v3H14v1a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V23H2.5A1.50008,1.50008,0,0,1,1,21.5V9.5A1.50008,1.50008,0,0,1,2.5,8ZM31,6.5v19A1.50008,1.50008,0,0,1,29.5,27h-9A1.50008,1.50008,0,0,1,19,25.5V6.5A1.50008,1.50008,0,0,1,20.5,5h9A1.50008,1.50008,0,0,1,31,6.5Zm-5,15a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Zm2-13a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const ComputerPcTower = createIcon(SVG, 'ComputerPcTower');
