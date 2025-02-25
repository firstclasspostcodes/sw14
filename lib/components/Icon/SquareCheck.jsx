
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-check" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4Zm-1.9303,8.40088-7.29217,8.62744a1.00009,1.00009,0,0,1-1.50623.02441L9.88147,16.741a.5.5,0,0,1,.00616-.67652l1.137-1.21508a.50052.50052,0,0,1,.63354-.08033l2.611,1.66162,6.57276-5.69458a.5003.5003,0,0,1,.67114.01465l1.01856.96411A.50013.50013,0,0,1,22.5697,12.40088Z"/>
</svg>
);

export const SquareCheck = createIcon(SVG, 'SquareCheck');
