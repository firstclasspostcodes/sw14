
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="direction" d="M27.07965,4.26141,5.12927,13.90533a.5.5,0,0,0,.07111.94056l9.41778,2.53643L17.15411,26.8a.5.5,0,0,0,.94062.0711L27.73859,4.92035A.50006.50006,0,0,0,27.07965,4.26141ZM17.06543,14.93408,12.83691,13.7959l9.57245-4.20526Z"/>
</svg>
);

export const Direction = createIcon(SVG, 'Direction');
