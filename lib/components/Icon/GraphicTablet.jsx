
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="graphic-tablet" d="M24,24H10V14H20.39685l3.9997-4H19V9a1,1,0,0,0-1-1H17V4H15V8H14a1,1,0,0,0-1,1v1H6.5A2.50263,2.50263,0,0,0,4,12.5v13A2.50263,2.50263,0,0,0,6.5,28h19A2.50263,2.50263,0,0,0,28,25.5V17.60114l-4,3.99945ZM8,19.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm21.64069-6.36786-6.57257,6.57269-2.774-2.774,6.57251-6.57251a1.22334,1.22334,0,0,1,1.73,0l1.044,1.04394A1.22315,1.22315,0,0,1,29.64069,13.13214Zm-11.61835,7.993,1.59955-3.13659,2.38849,2.38849-3.13666,1.59967a.61889.61889,0,0,1-.85138-.85157Z"/>
</svg>
);

export const GraphicTablet = createIcon(SVG, 'GraphicTablet');
