
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cutlery" d="M15,5v6.39209a4.00013,4.00013,0,0,1-.57,2.058l-1.86,3.09986a4.00013,4.00013,0,0,0-.57,2.058V27a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18.60791a4.00013,4.00013,0,0,0-.57-2.058L5.57,13.45007a4.00013,4.00013,0,0,1-.57-2.058V5A1,1,0,0,1,7,5V9.5a1,1,0,0,0,2,0V5a1,1,0,0,1,2,0V9.5a1,1,0,0,0,2,0V5a1,1,0,0,1,2,0Zm9-1H22a4.01162,4.01162,0,0,0-4,4v9a2.00583,2.00583,0,0,0,2,2h1.5a.49987.49987,0,0,1,.5.5V27a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V6A2.00583,2.00583,0,0,0,24,4Z"/>
</svg>
);

export const Cutlery = createIcon(SVG, 'Cutlery');
