
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="french-press" d="M23,10H9a3,3,0,0,1,3-3h3V5H13.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5H17V7h3A3,3,0,0,1,23,10Zm2,2H7.58594a.99991.99991,0,0,0-.707,1.707L9,15.82812V26a2.00229,2.00229,0,0,0,2,2H21a2.00229,2.00229,0,0,0,2-2V14h2v5a1,1,0,0,0,2,0V14A2.00229,2.00229,0,0,0,25,12Z"/>
</svg>
);

export const FrenchPress = createIcon(SVG, 'FrenchPress');
