
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="triangle-alert" d="M29.30371,25.75879l-12-21.12012a1.49938,1.49938,0,0,0-2.60742,0l-12,21.12012A1.4991,1.4991,0,0,0,4,28H28a1.4991,1.4991,0,0,0,1.30371-2.24121ZM18,24a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm0-9-.62756,3.58594A.50024.50024,0,0,1,16.87988,19H15.12012a.50024.50024,0,0,1-.49256-.41406L14,15V12a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Z"/>
</svg>
);

export const TriangleAlert = createIcon(SVG, 'TriangleAlert');
