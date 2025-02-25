
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="car-battery" d="M25,8H19V7a.99943.99943,0,0,1,1-1h4a.99943.99943,0,0,1,1,1ZM13,7a.99943.99943,0,0,0-1-1H8A.99943.99943,0,0,0,7,7V8h6Zm14,4V26a.99943.99943,0,0,1-1,1H6a.99943.99943,0,0,1-1-1V11a.99943.99943,0,0,1,1-1H26A.99943.99943,0,0,1,27,11ZM13,15.5a.5.5,0,0,0-.5-.5h-4a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5Zm11,0a.5.5,0,0,0-.5-.5H22V13.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V15H18.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H20v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V17h1.5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const CarBattery = createIcon(SVG, 'CarBattery');
