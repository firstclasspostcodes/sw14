
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-check" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm6.5697,8.40088-7.29217,8.62744a1,1,0,0,1-1.50623.02429L9.88147,16.741a.5.5,0,0,1,.00616-.67652l1.137-1.21508a.5.5,0,0,1,.63354-.0802l2.611,1.66149,6.57276-5.69458a.5.5,0,0,1,.67114.01465l1.01856.96424A.5.5,0,0,1,22.5697,12.40088Z"/>
</svg>
);

export const CircleCheck = createIcon(SVG, 'CircleCheck');
