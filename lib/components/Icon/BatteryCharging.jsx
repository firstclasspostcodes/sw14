
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="battery-charging" d="M25.5,8H6.5A2.50231,2.50231,0,0,0,4,10.5v11A2.50231,2.50231,0,0,0,6.5,24h19A2.50231,2.50231,0,0,0,28,21.5v-11A2.50231,2.50231,0,0,0,25.5,8ZM25,21H7V11H25Zm7-7v4a1,1,0,0,1-1,1H30V13h1A1,1,0,0,1,32,14ZM19.34485,15h-3.2381l.39911-2H23v6H17.09351L19.742,15.80371A.5.5,0,0,0,19.34485,15Zm-4.96662,4H9V13h4.876l-2.39423,3.20044A.5.5,0,0,0,11.88208,17h3.00153Z"/>
</svg>
);

export const BatteryCharging = createIcon(SVG, 'BatteryCharging');
