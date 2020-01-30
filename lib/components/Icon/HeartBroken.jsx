
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="heart-broken" d="M15.084,20.21094,13.1557,23.82678c-4.39191-4.31116-8.93689-7.7467-8.93689-11.901,0-4.99829,6.156-8.70532,10.32208-5.1914L12.585,9.30371a1.15065,1.15065,0,0,0,.10156,1.50977L15.874,14l-2.6875,2.68652a1.15053,1.15053,0,0,0,0,1.627ZM17.27264,6.94263l-2.2492,2.95483,3.29,3.28906a1.15053,1.15053,0,0,1,0,1.627L15.626,17.5l1.6875,1.68652a1.15093,1.15093,0,0,1,.20117,1.3545l-2.671,5.00817c.0235.02515.04773.0492.07123.07435a1.48665,1.48665,0,0,0,2.17028,0c4.84058-5.19507,10.69617-8.98267,10.69617-13.69776C27.78131,6.82983,21.58392,3.06934,17.27264,6.94263Z"/>
</svg>
);

export const HeartBroken = createIcon(SVG, 'HeartBroken');
