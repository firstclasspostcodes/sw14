
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="home" d="M27.10482,17H24V27.5a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5v-5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5V17H4.89518a.785.785,0,0,1-.55508-1.34008L15.46967,4.53023a.75.75,0,0,1,1.06066,0L27.6599,15.65992A.785.785,0,0,1,27.10482,17Z"/>
</svg>
);

export const Home = createIcon(SVG, 'Home');
