
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="blacksmith" d="M27,14.5v1.56885a.98992.98992,0,0,1-.8678.98437A7.00112,7.00112,0,0,0,20,24v1h2a1,1,0,0,1,1,1v2H9V26a1,1,0,0,1,1-1h2V22a1,1,0,0,0-1-1H10a5.001,5.001,0,0,1-4.9671-4.42383A.508.508,0,0,1,5.52991,16H12.5a.49987.49987,0,0,0,.5-.5v-1a.49987.49987,0,0,1,.5-.5h13A.49987.49987,0,0,1,27,14.5ZM5.5,14h4a.5.5,0,0,0,.5-.5V11H25.99976a.91694.91694,0,0,0,1-.79993L27,7.80005A.91691.91691,0,0,0,26,7H10V3.5A.5.5,0,0,0,9.5,3H8.25a.50006.50006,0,0,0-.4.2L5,7v6.5A.5.5,0,0,0,5.5,14Z"/>
</svg>
);

export const Blacksmith = createIcon(SVG, 'Blacksmith');
