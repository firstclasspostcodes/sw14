
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="honey" d="M8,7V6A1,1,0,0,1,9,5h5.66663l-.22791-.68384A1,1,0,0,1,15.38745,3h1.2251a1,1,0,0,1,.94873,1.31616L17.33337,5H23a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H9A1,1,0,0,1,8,7Zm16.504,5.50391S23,11,23,10H21a1,1,0,0,0-1,1v3a1,1,0,0,1-2,0V12a1,1,0,0,0-2,0,1,1,0,0,1-2,0V11a1,1,0,0,0-1-1H9c0,1-1.504,2.50391-1.504,2.50391a8.00024,8.00024,0,0,0-1.93249,8.18676l1.98071,5.9419A1.99992,1.99992,0,0,0,9.44159,28H22.55841a1.99992,1.99992,0,0,0,1.89734-1.36743l1.98071-5.9419A8.00024,8.00024,0,0,0,24.504,12.50391Z"/>
</svg>
);

export const Honey = createIcon(SVG, 'Honey');
