
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pool" d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,16,20Zm.5-10h-1A2.50231,2.50231,0,0,0,13,12.5a2.47637,2.47637,0,0,0,.51245,1.5A2.47637,2.47637,0,0,0,13,15.5,2.50231,2.50231,0,0,0,15.5,18h1A2.50231,2.50231,0,0,0,19,15.5a2.47637,2.47637,0,0,0-.51245-1.5A2.47637,2.47637,0,0,0,19,12.5,2.50231,2.50231,0,0,0,16.5,10Zm-1,2h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm1,4h-1a.5.5,0,0,1,0-1h1a.5.5,0,0,1,0,1Z"/>
</svg>
);

export const Pool = createIcon(SVG, 'Pool');
