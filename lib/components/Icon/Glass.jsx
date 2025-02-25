
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="glass" d="M17,17v8l4.64368,1.39307a.5.5,0,0,1,.35632.479V27.5a.5.5,0,0,1-.5.5H9.5a.5.5,0,0,1-.5-.5v-.62793a.5.5,0,0,1,.35632-.479L14,25V17L4.61914,4.80493A.5.5,0,0,1,5.01544,4H25.98456a.5.5,0,0,1,.3963.80493Z"/>
</svg>
);

export const Glass = createIcon(SVG, 'Glass');
