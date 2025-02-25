
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="filter-minus" d="M21.83911,12.806,19,16v6.51794a1,1,0,0,1-.3598.76819l-4.82013,4.01679A.5.5,0,0,1,13,26.91882V16L5.25256,7.28418A1.00043,1.00043,0,0,1,5,6.61981V5A1,1,0,0,1,6,4H18.25977a7.92915,7.92915,0,0,0,3.57934,8.806ZM32,5.98633a6,6,0,1,1-6-6A6,6,0,0,1,32,5.98633Zm-3-.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const FilterMinus = createIcon(SVG, 'FilterMinus');
