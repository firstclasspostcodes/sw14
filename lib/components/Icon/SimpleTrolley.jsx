
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="simple-trolley" d="M16,20.5v-6a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-.5.5h-7A.5.5,0,0,1,16,20.5ZM25,24a.99943.99943,0,0,1-1,1H12.94958A3.49228,3.49228,0,1,1,8,21.34961V18a1.0004,1.0004,0,0,1,.55273-.89453L12,15.38184V7.53516L9.44531,5.832A1,1,0,1,1,10.55469,4.168l3,2A1.00028,1.00028,0,0,1,14,7V23H24A.99943.99943,0,0,1,25,24Zm-14,.5A1.5,1.5,0,1,0,9.5,26,1.50168,1.50168,0,0,0,11,24.5Zm1-6.88184-2,1v2.43213a3.48058,3.48058,0,0,1,2,1.00537Z"/>
</svg>
);

export const SimpleTrolley = createIcon(SVG, 'SimpleTrolley');
