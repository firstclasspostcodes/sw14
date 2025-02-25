
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-hospital" d="M25,5H7A2,2,0,0,0,5,7V25a2.00006,2.00006,0,0,0,2,2H25a2.00006,2.00006,0,0,0,2-2V7A2,2,0,0,0,25,5ZM23,22.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V18H13v4.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V9.5A.5.5,0,0,1,9.5,9h3a.5.5,0,0,1,.5.5V14h6V9.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const SquareHospital = createIcon(SVG, 'SquareHospital');
