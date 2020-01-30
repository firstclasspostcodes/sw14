
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="lighter" d="M17.50555,10.76514c-2.19653-2.967.48481-6.31324,2.9513-8.511a.49287.49287,0,0,1,.7987.21265c.6883,2.16931,2.30848,4.0144,2.30848,6.2644a4.21768,4.21768,0,0,1-.95008,2.82788.4998.4998,0,0,1-.85992-.43579c.23-1.42505-.75836-2.55908-1.52179-3.64673a.2463.2463,0,0,0-.37866-.03467,3.78949,3.78949,0,0,0-1.45417,2.9773A.50072.50072,0,0,1,17.50555,10.76514ZM24,17V15a1,1,0,0,0-1-1H18a1,1,0,0,0-1,1v2H15.26624l-.90882-1.51465a.99888.99888,0,0,0-1.37207-.34277l-.47168.283L6.5,5.00952l-3.46411,2A2.0002,2.0002,0,0,0,2.30383,9.7417l5.5,9.52624A2,2,0,0,0,10.53589,20L13,18.57739V26a2.00006,2.00006,0,0,0,2,2H26a2.00006,2.00006,0,0,0,2-2V17Z"/>
</svg>
);

export const Lighter = createIcon(SVG, 'Lighter');
