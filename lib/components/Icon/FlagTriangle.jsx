
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="flag-triangle" d="M25.50311,13.43634,11,18.875V26a1,1,0,0,1,1,1v1H7V27a1,1,0,0,1,1-1V5A1,1,0,0,1,9,4h1a1,1,0,0,1,1,1V6.125l14.50311,5.43866A1,1,0,0,1,25.50311,13.43634Z"/>
</svg>
);

export const FlagTriangle = createIcon(SVG, 'FlagTriangle');
