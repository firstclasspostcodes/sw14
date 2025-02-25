
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="filter" d="M27,5V6.61981a1.00043,1.00043,0,0,1-.25256.66437L19,16v6.51794a1,1,0,0,1-.3598.76819l-4.82013,4.01679A.5.5,0,0,1,13,26.91882V16L5.25256,7.28418A1.00043,1.00043,0,0,1,5,6.61981V5A1,1,0,0,1,6,4H26A1,1,0,0,1,27,5Z"/>
</svg>
);

export const Filter = createIcon(SVG, 'Filter');
