
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="turtle" d="M31,16.45947V18a1,1,0,0,1-1,1H26.05957A3.05956,3.05956,0,0,0,23,22.05957V23a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V22a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v1a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V19H3a1,1,0,0,1-1-1v-.21924a1,1,0,0,1,.75745-.97021l2.28094-.57032A7.99888,7.99888,0,0,1,13,9h2a7.99643,7.99643,0,0,1,7.93091,7h.62756a1.99983,1.99983,0,0,0,1.89722-1.36743l.26514-.79511a.99958.99958,0,0,1,1.14422-.66412l1.72278.34424A3.00006,3.00006,0,0,1,31,16.45947Z"/>
</svg>
);

export const Turtle = createIcon(SVG, 'Turtle');
