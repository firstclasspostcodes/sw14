
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tag" d="M27.04163,17.14209,15.19238,5.293A.99975.99975,0,0,0,14.48529,5H6A1,1,0,0,0,5,6v8.48511a1.00016,1.00016,0,0,0,.29291.70727L17.14215,27.0415a1.00023,1.00023,0,0,0,1.41419,0l8.48529-8.48535A.99986.99986,0,0,0,27.04163,17.14209ZM11,13a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,11,13Z"/>
</svg>
);

export const Tag = createIcon(SVG, 'Tag');
