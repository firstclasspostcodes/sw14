
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="computer-all-in-one" d="M20,26v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h6A1,1,0,0,1,20,26ZM29,5.5v16A1.50444,1.50444,0,0,1,27.5,23H4.5A1.50444,1.50444,0,0,1,3,21.5V5.5A1.50008,1.50008,0,0,1,4.5,4h23A1.50008,1.50008,0,0,1,29,5.5Zm-12,14a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5ZM26,7H6V17H26Z"/>
</svg>
);

export const ComputerAllInOne = createIcon(SVG, 'ComputerAllInOne');
