
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="drinking-water" d="M16,11H4V7h6V5H9A1,1,0,0,1,8,4V3A1,1,0,0,1,9,2h5a1,1,0,0,1,1,1V4a1,1,0,0,1-1,1H13V7h3a5.00588,5.00588,0,0,1,5,5v2H17V12A1.00067,1.00067,0,0,0,16,11Zm9.98047,6.19629-2,10A1.00066,1.00066,0,0,1,23,28H16a1.00066,1.00066,0,0,1-.98047-.80371l-2-10A1,1,0,0,1,14,16H25a1,1,0,0,1,.98047,1.19629ZM23.78027,18H15.21973l.3999,2h7.76074Z"/>
</svg>
);

export const DrinkingWater = createIcon(SVG, 'DrinkingWater');
