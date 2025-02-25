
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="open" d="M9.62946,11.41876l5.55682-7.77954a1,1,0,0,1,1.62744,0l5.55682,7.77954A1,1,0,0,1,21.55682,13H19v6a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V13H10.44318A1,1,0,0,1,9.62946,11.41876ZM27,22H5a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V23A1,1,0,0,0,27,22Z"/>
</svg>
);

export const Open = createIcon(SVG, 'Open');
