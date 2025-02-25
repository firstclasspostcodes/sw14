
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="car-wheel-wrench" d="M27,6v5a1,1,0,0,1-1,1H22.76764a3,3,0,0,1-1.323-.3075L18,10H16.5a2.97105,2.97105,0,0,0-2.52539,1.81934L8.92285,26.97461a1.49992,1.49992,0,0,1-2.8457-.94922l5.05176-15.1543A5.96,5.96,0,0,1,16.5,7H18l3.37-1.68372A3,3,0,0,1,22.71082,5H26A1,1,0,0,1,27,6Z"/>
</svg>
);

export const CarWheelWrench = createIcon(SVG, 'CarWheelWrench');
