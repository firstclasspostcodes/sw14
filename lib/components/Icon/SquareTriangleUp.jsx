
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-triangle-up" d="M20.81006,17.42975A1,1,0,0,1,19.98859,19H12.01141a1,1,0,0,1-.82147-1.57025l3.98859-5.74628a1.00006,1.00006,0,0,1,1.643,0ZM27,8.5v15A3.50424,3.50424,0,0,1,23.5,27H8.5A3.50424,3.50424,0,0,1,5,23.5V8.5A3.50424,3.50424,0,0,1,8.5,5h15A3.50424,3.50424,0,0,1,27,8.5Zm-3,0a.50641.50641,0,0,0-.5-.5H8.5a.50641.50641,0,0,0-.5.5v15a.50641.50641,0,0,0,.5.5h15a.50641.50641,0,0,0,.5-.5Z"/>
</svg>
);

export const SquareTriangleUp = createIcon(SVG, 'SquareTriangleUp');
