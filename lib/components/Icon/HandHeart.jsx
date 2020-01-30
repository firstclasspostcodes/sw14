
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-heart" d="M15.12823,6.8363c0-2.28656,3.1164-3.923,4.78656-1.58191a.10686.10686,0,0,0,.17377.00226A2.63608,2.63608,0,0,1,24.87177,6.8363c0,1.99585-2.53718,3.58985-4.56421,5.81757a.41344.41344,0,0,1-.61512,0C17.66541,10.42615,15.12823,8.83215,15.12823,6.8363ZM5.70709,19.70709a1,1,0,0,0-1.41418,0L2,22l7,7,2.29291-2.29291a1,1,0,0,0,0-1.41418Zm24.18549-1.76373a1.49865,1.49865,0,0,0-1.94922-.83594l-3.10065,1.24024-3.86517,1.57812A1.00233,1.00233,0,0,1,20.59961,20H16a1,1,0,0,1,0-2h4.40332l1.19867-.48938A1.49495,1.49495,0,0,0,20.5,15H17l-3.32709-.86523a1.99977,1.99977,0,0,0-1.28668.17187L9.28955,15.85535a1.998,1.998,0,0,0-.519.37414L7,18l6,6h5.5a1.49157,1.49157,0,0,0,.55664-.10742l10-4A1.49946,1.49946,0,0,0,29.89258,17.94336Z"/>
</svg>
);

export const HandHeart = createIcon(SVG, 'HandHeart');
