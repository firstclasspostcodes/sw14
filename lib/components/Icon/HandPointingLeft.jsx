
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-pointing-left" d="M29,11V22H25a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1ZM18.17157,8H13.82843a2.00014,2.00014,0,0,0-1.41437.58588l-.56054.56054A.5.5,0,0,0,12.20709,10H15a1,1,0,0,1,0,2H3.5a1.5,1.5,0,0,0,0,3H9l2.51343,6.70227A1.99989,1.99989,0,0,0,13.386,23H18.946a1.99954,1.99954,0,0,0,1.02894-.285L22,21.5V11L19.58594,8.58582A2.00019,2.00019,0,0,0,18.17157,8Z"/>
</svg>
);

export const HandPointingLeft = createIcon(SVG, 'HandPointingLeft');
