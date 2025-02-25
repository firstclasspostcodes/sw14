
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hammer" d="M16.17175,11.58582l4.24243,4.24243L8.82825,27.41418A1,1,0,0,1,7.414,27.41412L4.58594,24.58575A.99993.99993,0,0,1,4.586,23.17157ZM19.17157,3.929a.99988.99988,0,0,0-1.41418,0L14.55017,7.13611,25.86389,18.44983,26.94977,17.364V11.70709Z"/>
</svg>
);

export const Hammer = createIcon(SVG, 'Hammer');
