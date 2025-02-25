
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="dice-one" d="M24,5H8A3.00007,3.00007,0,0,0,5,8V24a3.00007,3.00007,0,0,0,3,3H24a3.00007,3.00007,0,0,0,3-3V8A3.00007,3.00007,0,0,0,24,5ZM16,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Z"/>
</svg>
);

export const DiceOne = createIcon(SVG, 'DiceOne');
