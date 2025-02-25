
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="food-service" d="M26.51208,17H5.088C5.66272,13.32,9.31689,9.873,14,9.14929V7a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V9.20764C22.49219,10.05957,25.95428,13.423,26.51208,17ZM3,19v1a1,1,0,0,0,1,1H5l2.4,3.2A2,2,0,0,0,9,25H23a2,2,0,0,0,1.6-.8L27,21h1a1,1,0,0,0,1-1V19Z"/>
</svg>
);

export const FoodService = createIcon(SVG, 'FoodService');
