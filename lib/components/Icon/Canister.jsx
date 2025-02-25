
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="canister" d="M6.73224,10.68188,5.318,9.26782a.50007.50007,0,0,1,0-.70715L8.56067,5.318a.50011.50011,0,0,1,.70709,0L10.682,6.73218a.50007.50007,0,0,1,0,.70715L7.43933,10.68188A.49988.49988,0,0,1,6.73224,10.68188ZM25,10V25a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3V14.82837a1.99989,1.99989,0,0,1,.58582-1.41419l5.82836-5.82849A2.00035,2.00035,0,0,1,14.82843,7H22A3,3,0,0,1,25,10Zm-2,0a.99943.99943,0,0,0-1-1H16a1,1,0,0,0,0,2h6A.99943.99943,0,0,0,23,10Z"/>
</svg>
);

export const Canister = createIcon(SVG, 'Canister');
