
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder" d="M4,12H28V26a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2ZM26,7H13L11.58582,5.58582A1.99993,1.99993,0,0,0,10.17157,5H6A2,2,0,0,0,4,7v3H28V9A2,2,0,0,0,26,7Z"/>
</svg>
);

export const Folder = createIcon(SVG, 'Folder');
