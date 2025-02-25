
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bold" d="M21.83862,15.51709A6.99231,6.99231,0,0,0,16.5,4c-.13873,0-.27979.00806-.42072.016C16.05176,4.01367,16.02814,4,16,4H8A1,1,0,0,0,7,5V6A1,1,0,0,0,8,7H9V25H8a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h9a.92988.92988,0,0,0,.09906-.02c.13373.00732.2677.02.40094.02a6.993,6.993,0,0,0,4.33862-12.48291ZM13,8h3.5a3,3,0,0,1,0,6H13Zm4.5,16H13V18h4.5a3,3,0,0,1,0,6Z"/>
</svg>
);

export const Bold = createIcon(SVG, 'Bold');
