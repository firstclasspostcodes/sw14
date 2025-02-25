
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-pointing-right" d="M30,13.5A1.50008,1.50008,0,0,1,28.5,15H23l-2.51343,6.70227A1.99989,1.99989,0,0,1,18.614,23H13.054a1.99954,1.99954,0,0,1-1.02894-.285L10,21.5V11l2.41406-2.41418A2.00019,2.00019,0,0,1,13.82843,8h4.34326a1.99988,1.99988,0,0,1,1.41413.58575l.56066.56067A.5.5,0,0,1,19.79291,10H17a1,1,0,0,0,0,2H28.5A1.50008,1.50008,0,0,1,30,13.5ZM7,11H3V22H7a1,1,0,0,0,1-1V12A1,1,0,0,0,7,11Z"/>
</svg>
);

export const HandPointingRight = createIcon(SVG, 'HandPointingRight');
