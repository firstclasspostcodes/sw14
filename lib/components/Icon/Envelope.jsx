
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="envelope" d="M14.69305,17.707,3.986,7h24L17.27893,17.707a1.15255,1.15255,0,0,1-.70709.293H15.40015A1.15257,1.15257,0,0,1,14.69305,17.707ZM10.17169,16,4,9.82812V22.17188Zm11.65656,0L28,22.17188V9.82812Zm-3.428,3.41418A2.3055,2.3055,0,0,1,16.986,20H14.986a2.30474,2.30474,0,0,1-1.41424-.58594l-1.99988-2L3.986,25h24l-7.58581-7.58594Z"/>
</svg>
);

export const Envelope = createIcon(SVG, 'Envelope');
