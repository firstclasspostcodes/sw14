
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="credit-card" d="M4,23a2.00229,2.00229,0,0,0,2,2H26a2.00229,2.00229,0,0,0,2-2V15H4Zm16-3.5a.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5ZM28,9v2H4V9A2.00229,2.00229,0,0,1,6,7H26A2.00229,2.00229,0,0,1,28,9Z"/>
</svg>
);

export const CreditCard = createIcon(SVG, 'CreditCard');
