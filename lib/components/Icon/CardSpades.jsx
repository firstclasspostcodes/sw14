
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="card-spades" d="M26,15.5A5.22636,5.22636,0,0,1,20.5,21a5.4637,5.4637,0,0,1-3.32306-1.12061,1.94839,1.94839,0,0,0-2.35388,0A5.4637,5.4637,0,0,1,11.5,21,5.22636,5.22636,0,0,1,6,15.5C6,11,13,6,16,4,19,6,26,11,26,15.5ZM23,26H22a5.66533,5.66533,0,0,1-4.439-2.53375,1.96985,1.96985,0,0,0-3.12194,0A5.66533,5.66533,0,0,1,10,26H9a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>
</svg>
);

export const CardSpades = createIcon(SVG, 'CardSpades');
