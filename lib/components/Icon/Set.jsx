
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="set" d="M8.3363,12.3667,15.226,3.94592a1.00008,1.00008,0,0,1,1.548,0L23.6637,12.3667A1,1,0,0,1,22.88977,14H9.11023A1,1,0,0,1,8.3363,12.3667ZM22.88977,18H9.11023a1,1,0,0,0-.77393,1.6333L15.226,28.054a1.00008,1.00008,0,0,0,1.548,0L23.6637,19.6333A1,1,0,0,0,22.88977,18Z"/>
</svg>
);

export const Set = createIcon(SVG, 'Set');
