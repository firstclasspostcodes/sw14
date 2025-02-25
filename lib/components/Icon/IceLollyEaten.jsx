
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="ice-lolly-eaten" d="M14,22h4v4a2,2,0,0,1-4,0Zm6.5-12A5.5,5.5,0,0,1,15,4.5c0-.16992.02045-.33423.03619-.5H15a5,5,0,0,0-5,5v9a2.00006,2.00006,0,0,0,2,2h8a2.00006,2.00006,0,0,0,2-2V9.78125A5.41906,5.41906,0,0,1,20.5,10Z"/>
</svg>
);

export const IceLollyEaten = createIcon(SVG, 'IceLollyEaten');
