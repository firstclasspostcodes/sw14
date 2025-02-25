
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="division" d="M26,14v4a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H25A1,1,0,0,1,26,14Zm-9,7H15a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V23A2,2,0,0,0,17,21ZM15,11h2a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2H15a2,2,0,0,0-2,2V9A2,2,0,0,0,15,11Z"/>
</svg>
);

export const Division = createIcon(SVG, 'Division');
