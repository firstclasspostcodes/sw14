
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="table-tennis" d="M11.04022,21.52551l1.13129,1.13129L7.15692,27.67169a1,1,0,0,1-1.41431,0l-1.41418-1.4143a1,1,0,0,1,0-1.41419l5.01471-5.01459ZM24.19238,7.80762c-4.94977-4.94977-9.89947-2.82843-13.36432.63635a8.02106,8.02106,0,0,0-2.54937,7.49158L15.941,23.59784a8.05547,8.05547,0,0,0,7.615-2.4259C26.31372,18.41418,29.14215,12.75732,24.19238,7.80762ZM25,23a2,2,0,1,0,2,2A2,2,0,0,0,25,23Z"/>
</svg>
);

export const TableTennis = createIcon(SVG, 'TableTennis');
