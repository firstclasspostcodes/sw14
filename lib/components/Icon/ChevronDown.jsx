
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-down" d="M26.91425,13.12115,16.70709,23.32849a.99988.99988,0,0,1-1.41418,0L5.08575,13.12115a.50007.50007,0,0,1,0-.70715l2.8285-2.82806a.5.5,0,0,1,.70709,0L16,16.96436l7.37866-7.37842a.5.5,0,0,1,.70709,0l2.8285,2.82806A.50007.50007,0,0,1,26.91425,13.12115Z"/>
</svg>
);

export const ChevronDown = createIcon(SVG, 'ChevronDown');
