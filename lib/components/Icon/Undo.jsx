
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="undo" d="M27.98163,17.54785A8.18912,8.18912,0,0,1,19.71747,25H10a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1H20a3.00481,3.00481,0,0,0,2.94183-3.5979A3.07967,3.07967,0,0,0,19.88159,14H13v2.07935a.9999.9999,0,0,1-1.57349.81909l-6.54187-4.5791a1.0002,1.0002,0,0,1,0-1.63868l6.54187-4.57934A1.00006,1.00006,0,0,1,13,6.92065V9h7A8.00862,8.00862,0,0,1,27.98163,17.54785Z"/>
</svg>
);

export const Undo = createIcon(SVG, 'Undo');
