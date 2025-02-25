
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="beach-umbrella" d="M15,18h2v9a1,1,0,0,1-2,0Zm13-1a4.81241,4.81241,0,0,0-3-1,4.9816,4.9816,0,0,0-4.03375,2.06836,6.99623,6.99623,0,0,0-9.93244,0A4.98039,4.98039,0,0,0,4,17,11.99443,11.99443,0,0,1,15,5.05054V4a1,1,0,0,1,2,0V5.05054A11.99443,11.99443,0,0,1,28,17ZM15.32629,7.02783a10.02018,10.02018,0,0,0-8.87365,6.99365Q6.7251,14.00024,7,14a6.95441,6.95441,0,0,1,3.21143.79346A11.9987,11.9987,0,0,1,15.32629,7.02783ZM25,14q.27466,0,.54736.02148a10.02018,10.02018,0,0,0-8.87365-6.99365,11.9987,11.9987,0,0,1,5.11486,7.76563A6.95441,6.95441,0,0,1,25,14Z"/>
</svg>
);

export const BeachUmbrella = createIcon(SVG, 'BeachUmbrella');
