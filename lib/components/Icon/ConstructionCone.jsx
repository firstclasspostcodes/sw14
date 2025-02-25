
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="construction-cone" d="M20.04547,12h-8.7727l2.00555-6.30322A.99991.99991,0,0,1,14.2312,5h2.56836a1,1,0,0,1,.93982.65826Zm.72724,2H10.63635L9.04547,19H22.59094ZM26,25H24.77271l-1.45453-4H8.40912L7.13635,25H6a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V26A1,1,0,0,0,26,25Z"/>
</svg>
);

export const ConstructionCone = createIcon(SVG, 'ConstructionCone');
