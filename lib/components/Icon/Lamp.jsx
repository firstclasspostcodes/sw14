
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="lamp" d="M21,26v2H12V26a1,1,0,0,1,1-1h2V15h3V25h2A1,1,0,0,1,21,26Zm2.20837-14.40613-3.11108-7A1,1,0,0,0,19.18347,4H13.81653a1,1,0,0,0-.91382.59387l-3.11108,7A1,1,0,0,0,10.70544,13H22.29456A1,1,0,0,0,23.20837,11.59387Z"/>
</svg>
);

export const Lamp = createIcon(SVG, 'Lamp');
