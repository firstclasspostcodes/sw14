
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="eraser" d="M13.97949,26l2,2H7a1,1,0,0,1,0-2Zm13.127-3.25732L21.84863,28h-3.041L4.89355,14.08594a2.00164,2.00164,0,0,1,0-2.82862l5.36426-5.36377a2.00105,2.00105,0,0,1,2.82813,0L27.10645,19.91406A2.00164,2.00164,0,0,1,27.10645,22.74268ZM18.32892,13.964l-6.657-6.65637L6.30762,12.67139l6.65686,6.657Z"/>
</svg>
);

export const Eraser = createIcon(SVG, 'Eraser');
