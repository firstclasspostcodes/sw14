
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="redo" d="M19,16.07935V14H12.11841a3.07967,3.07967,0,0,0-3.06024,2.4021A3.00481,3.00481,0,0,0,12,20H22a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1H12.28253a8.18912,8.18912,0,0,1-8.26416-7.45215A8.00862,8.00862,0,0,1,12,9h7V6.92065a1.00006,1.00006,0,0,1,1.57349-.81933l6.54187,4.57934a1.0002,1.0002,0,0,1,0,1.63868l-6.54187,4.5791A.9999.9999,0,0,1,19,16.07935Z"/>
</svg>
);

export const Redo = createIcon(SVG, 'Redo');
