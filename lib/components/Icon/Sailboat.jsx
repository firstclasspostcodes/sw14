
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="sailboat" d="M28.85614,21.622C27.65771,26.16656,23.78723,28,19,28H6.65942a1,1,0,0,1-.91919-.60608L3.29871,21.697A.5.5,0,0,1,3.7583,21H28.36517A.50453.50453,0,0,1,28.85614,21.622ZM5.91907,19H15.5a.5.5,0,0,0,.5-.5V3.69312a.5.5,0,0,0-.9198-.27167L5.49927,18.22833A.5.5,0,0,0,5.91907,19ZM18.5,19h6.63843a.5.5,0,0,0,.43408-.74811L18.93414,6.6347A.5.5,0,0,0,18,6.88275V18.5A.5.5,0,0,0,18.5,19Z"/>
</svg>
);

export const Sailboat = createIcon(SVG, 'Sailboat');
