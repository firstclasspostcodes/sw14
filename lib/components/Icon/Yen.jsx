
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="yen" d="M26,6V7a1,1,0,0,1-1,1H23.592l-3.576,6H22a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H18.228L18,17.38257V19h4a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H18v2h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h1V22H10a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h4V17.38257L13.772,17H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h1.984L8.408,8H7A1,1,0,0,1,6,7V6a.99259.99259,0,0,1,.66071-.93152L6.61993,5H13a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1l3,5.05566L19,8a1,1,0,0,1-1-1V6a1,1,0,0,1,1-1h6.38007l-.04078.06848A.99259.99259,0,0,1,26,6Z"/>
</svg>
);

export const Yen = createIcon(SVG, 'Yen');
