
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-info" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm2.42529,10.91565L16.6,21h1.25958a.5.5,0,0,1,.48505.62134l-.25,1A.50007.50007,0,0,1,17.60962,23H14a1.40763,1.40763,0,0,1-1.42529-1.91565L14.4,15h-.75958a.5.5,0,0,1-.48505-.62134l.25-1A.49994.49994,0,0,1,13.89038,13H17A1.40763,1.40763,0,0,1,18.42529,14.91565Zm.14435-3.33337A.5.5,0,0,1,18.07642,12H15.59021a.5.5,0,0,1-.49316-.58228l.33331-2A.5.5,0,0,1,15.92358,9h2.48621a.5.5,0,0,1,.49316.58228Z"/>
</svg>
);

export const CircleInfo = createIcon(SVG, 'CircleInfo');
