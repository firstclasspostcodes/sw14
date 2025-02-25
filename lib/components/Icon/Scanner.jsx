
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="scanner" d="M26,17H6a2.00587,2.00587,0,0,0-2,2v4a2.00591,2.00591,0,0,0,2,2v1a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V25H22v1a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V25a2.00591,2.00591,0,0,0,2-2V19A2.00587,2.00587,0,0,0,26,17Zm0,3.49994a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM5.8161,6.965,6.184,6.03473A1,1,0,0,1,7.48157,5.4726l19.64007,7.76464A1,1,0,0,1,27.6839,14.535l-.36792.93018a1,1,0,0,1-1.29755.56219L6.37836,8.2627A.99994.99994,0,0,1,5.8161,6.965Z"/>
</svg>
);

export const Scanner = createIcon(SVG, 'Scanner');
