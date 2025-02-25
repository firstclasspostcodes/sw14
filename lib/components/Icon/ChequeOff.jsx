
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cheque-off" d="M23.5,21H14.9668l2-2H23.5a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,23.5,21ZM27.997,7.96973,22.9668,13H26V23H12.9668l-2,2H26a2.00006,2.00006,0,0,0,2-2V8C28,7.98975,27.99713,7.98022,27.997,7.96973Zm-.78211-2.90918L5.06055,27.21484a1.49984,1.49984,0,0,1-2.1211-2.12109l1.25208-1.252A1.98367,1.98367,0,0,1,4,23V8A2.00006,2.00006,0,0,1,6,6H22.0332l3.06055-3.06055a1.49984,1.49984,0,0,1,2.12109,2.1211ZM6,22.0332l2-2V19.5a.5.5,0,0,1,.5-.5h.5332l2-2H8.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h4.5332l2-2H6Z"/>
</svg>
);

export const ChequeOff = createIcon(SVG, 'ChequeOff');
