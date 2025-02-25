
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="squares" d="M29,6.5v13a3.495,3.495,0,0,1-3,3.44946V6.5a.50641.50641,0,0,0-.5-.5H9.05054A3.495,3.495,0,0,1,12.5,3h13A3.50424,3.50424,0,0,1,29,6.5Zm-5,5v13A3.50424,3.50424,0,0,1,20.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5v-13A3.50424,3.50424,0,0,1,7.5,8h13A3.50424,3.50424,0,0,1,24,11.5Zm-3,0a.50641.50641,0,0,0-.5-.5H7.5a.50641.50641,0,0,0-.5.5v13a.50641.50641,0,0,0,.5.5h13a.50641.50641,0,0,0,.5-.5Z"/>
</svg>
);

export const Squares = createIcon(SVG, 'Squares');
