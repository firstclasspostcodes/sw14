
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vector-path-curve" d="M28,3H23a1,1,0,0,0-1,1V5.32861a20.97724,20.97724,0,0,0-11.06055,5.61084A20.981,20.981,0,0,0,5.32861,22H4a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V23a1,1,0,0,0-1-1H8.37982a17.78007,17.78007,0,0,1,4.68073-8.93945A17.78394,17.78394,0,0,1,22,8.37988V9a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V4A1,1,0,0,0,28,3ZM8,27H5V24H8ZM27,8H24V5h3Z"/>
</svg>
);

export const VectorPathCurve = createIcon(SVG, 'VectorPathCurve');
