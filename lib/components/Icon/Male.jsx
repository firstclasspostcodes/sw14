
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="male" d="M27,4H20a1,1,0,0,0-1,1V6a1,1,0,0,0,1,1h2.87891l-3.81574,3.81567a9.52556,9.52556,0,1,0,2.1211,2.1211L25,9.12109V12a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V5A1,1,0,0,0,27,4ZM13.5,25A6.5,6.5,0,1,1,20,18.5,6.50753,6.50753,0,0,1,13.5,25Z"/>
</svg>
);

export const Male = createIcon(SVG, 'Male');
