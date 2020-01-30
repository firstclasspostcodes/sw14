
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pen" d="M12.46643,11.26526l8.26831,8.26831L17.419,25.69147a1.07112,1.07112,0,0,1-.734.49548L6.04486,27.3692l6.38342-6.38342a2,2,0,1,0-1.41406-1.41406L4.6308,25.95514,5.813,15.31494a1.07112,1.07112,0,0,1,.49548-.734ZM15.43518,7.734a1.46132,1.46132,0,0,0-1.78509,1.88678l8.72912,8.72912A1.46132,1.46132,0,0,0,24.266,16.56482Zm11.93921,2.54846L21.71753,4.62561a1.00009,1.00009,0,0,0-1.41425,0L17.72913,7.19977l7.0711,7.0711,2.57416-2.57415A1.00009,1.00009,0,0,0,27.37439,10.28247Z"/>
</svg>
);

export const Pen = createIcon(SVG, 'Pen');
