
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-new-window" d="M24,15.57251l3,3V23.5A3.50424,3.50424,0,0,1,23.5,27H8.5A3.50424,3.50424,0,0,1,5,23.5V8.5A3.50424,3.50424,0,0,1,8.5,5h4.92755l3,3H8.5a.50641.50641,0,0,0-.5.5v15a.50641.50641,0,0,0,.5.5h15a.50641.50641,0,0,0,.5-.5ZM19.81952,8.56372,12.8844,17.75a.49989.49989,0,0,0,.04547.65479l.66534.66528a.49983.49983,0,0,0,.65479.04553l9.18628-6.93518,2.12579,2.12585a.5.5,0,0,0,.84741-.27526l1.48273-9.35108a.50006.50006,0,0,0-.57214-.57214L17.969,5.59058a.5.5,0,0,0-.27526.84741Z"/>
</svg>
);

export const SquareNewWindow = createIcon(SVG, 'SquareNewWindow');
