
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="spray" d="M17,13H6l3-3h5ZM13,6.5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5V8h3ZM5,27a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V15H5ZM30,7a3.49289,3.49289,0,0,0-2.03345-3.1684A2.47416,2.47416,0,0,0,28,3.5a2.5,2.5,0,0,0-5,0,2.45359,2.45359,0,0,0,.02484.24664l-6.57977,2.31a.99974.99974,0,0,0,0,1.88672l6.57977,2.31A2.45359,2.45359,0,0,0,23,10.5a2.5,2.5,0,0,0,5,0,2.47416,2.47416,0,0,0-.03345-.3316A3.49289,3.49289,0,0,0,30,7Z"/>
</svg>
);

export const Spray = createIcon(SVG, 'Spray');
