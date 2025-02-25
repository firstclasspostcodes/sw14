
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="power" d="M15,16V4a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V16a1,1,0,0,1-1,1H16A1,1,0,0,1,15,16Zm7.63947-9.21533a1.009,1.009,0,0,0-1.43769.39477l-.45318.89649a.989.989,0,0,0,.34283,1.2799,8.5028,8.5028,0,1,1-9.18683.00257.99122.99122,0,0,0,.3468-1.28247l-.4533-.89673a1.01154,1.01154,0,0,0-1.446-.38916A11.43919,11.43919,0,0,0,5.00647,16.89075,11.50009,11.50009,0,0,0,28,16.5,11.43516,11.43516,0,0,0,22.63947,6.78467Z"/>
</svg>
);

export const Power = createIcon(SVG, 'Power');
