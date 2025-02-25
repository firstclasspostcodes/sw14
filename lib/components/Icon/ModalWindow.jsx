
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="modal-window" d="M24.5,4h-12A3.50424,3.50424,0,0,0,9,7.5v12A3.50424,3.50424,0,0,0,12.5,23h12A3.50424,3.50424,0,0,0,28,19.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,19.5a.50609.50609,0,0,1-.5.5h-12a.50609.50609,0,0,1-.5-.5V7.5a.50609.50609,0,0,1,.5-.5h12a.50609.50609,0,0,1,.5.5ZM7.5,25H22.94946A3.495,3.495,0,0,1,19.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5v-12A3.495,3.495,0,0,1,7,9.05054V24.5A.50609.50609,0,0,0,7.5,25ZM22,16v1a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1h5A1,1,0,0,1,22,16Z"/>
</svg>
);

export const ModalWindow = createIcon(SVG, 'ModalWindow');
