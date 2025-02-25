
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="ruble" d="M18.5,17a5.80329,5.80329,0,0,0,6-6,5.80329,5.80329,0,0,0-6-6H10A1,1,0,0,0,9,6V7a1,1,0,0,0,1,1h1v6H10a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1v2H10a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1v2H10a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V25a1,1,0,0,0-1-1H15V22h6a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17ZM15,9h3.5a1.85759,1.85759,0,0,1,2,2,1.85759,1.85759,0,0,1-2,2H15Z"/>
</svg>
);

export const Ruble = createIcon(SVG, 'Ruble');
