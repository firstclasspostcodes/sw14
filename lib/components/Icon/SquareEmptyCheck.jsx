
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-check" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,24.5a.50641.50641,0,0,1-.5.5H7.5a.50641.50641,0,0,1-.5-.5V7.5A.50641.50641,0,0,1,7.5,7h17a.50641.50641,0,0,1,.5.5ZM22.53156,11.715a.5.5,0,0,1,.03814.68591l-7.29217,8.62744a1,1,0,0,1-1.50623.02429L9.88147,16.741a.5.5,0,0,1,.00616-.67658l1.137-1.21508a.5.5,0,0,1,.63354-.0802l2.611,1.66156,6.57276-5.69465a.5.5,0,0,1,.67114.01477Z"/>
</svg>
);

export const SquareEmptyCheck = createIcon(SVG, 'SquareEmptyCheck');
