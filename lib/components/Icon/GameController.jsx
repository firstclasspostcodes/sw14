
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="game-controller" d="M24.78741,27a2.705,2.705,0,0,1-2.48834-1.644L20.01611,21H11.98389l-2.283,4.356a2.705,2.705,0,0,1-5.15381-1.52149L6,15c.4306-2.1958,1.79083-4,4-4h3V10a1,1,0,0,1,1-1h1V5h2V9h1a1,1,0,0,1,1,1v1h3c2.20917,0,3.62823,1.82812,4,4l1.45288,8.83447A2.705,2.705,0,0,1,24.78741,27Z"/>
</svg>
);

export const GameController = createIcon(SVG, 'GameController');
