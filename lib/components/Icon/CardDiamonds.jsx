
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="card-diamonds" d="M25.59991,16.4801l-9.21582,11.059a.5.5,0,0,1-.76818,0L6.40009,16.4801a.75.75,0,0,1,0-.96026l9.21582-11.0589a.5.5,0,0,1,.76818,0l9.21582,11.0589A.75.75,0,0,1,25.59991,16.4801Z"/>
</svg>
);

export const CardDiamonds = createIcon(SVG, 'CardDiamonds');
