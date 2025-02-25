
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder-plus" d="M26,14a7.95668,7.95668,0,0,0,2-.26331V26a2.00006,2.00006,0,0,1-2,2H6a2.00006,2.00006,0,0,1-2-2V12H20.72626A7.95755,7.95755,0,0,0,26,14ZM18.06946,7H13L11.58582,5.58582A1.99993,1.99993,0,0,0,10.17157,5H6A2.00006,2.00006,0,0,0,4,7v3H19.08246A7.93128,7.93128,0,0,1,18.06946,7ZM32,6a6,6,0,1,1-6-6A6,6,0,0,1,32,6Zm-3-.5a.5.5,0,0,0-.5-.5H27V3.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V5H23.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H25V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V7h1.5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const FolderPlus = createIcon(SVG, 'FolderPlus');
