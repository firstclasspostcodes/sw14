
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="trousers" d="M23,6H9V4.5A.5.5,0,0,1,9.5,4h13a.5.5,0,0,1,.5.5Zm.27271,2H8.72729L6.07739,27.43243A.5.5,0,0,0,6.57281,28H12.5827a.5.5,0,0,0,.49195-.41058L15.72729,13h.54542l2.65264,14.58942A.5.5,0,0,0,19.4173,28h6.00989a.5.5,0,0,0,.49542-.56757Z"/>
</svg>
);

export const Trousers = createIcon(SVG, 'Trousers');
