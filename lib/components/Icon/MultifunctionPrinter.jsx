
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="multifunction-printer" d="M26,13H6a2.00587,2.00587,0,0,0-2,2v9a2.00591,2.00591,0,0,0,2,2H8V22a1.003,1.003,0,0,1,1-1H23a1.003,1.003,0,0,1,1,1v4h2a2.00591,2.00591,0,0,0,2-2V15A2.00587,2.00587,0,0,0,26,13Zm0,3.49994a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM10,23H22v5a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1ZM5.8161,2.965,6.184,2.03473A1,1,0,0,1,7.48157,1.4726L27.12164,9.23724A1,1,0,0,1,27.6839,10.535l-.36792.93018a1,1,0,0,1-1.29755.56219L6.37836,4.2627A.99994.99994,0,0,1,5.8161,2.965Z"/>
</svg>
);

export const MultifunctionPrinter = createIcon(SVG, 'MultifunctionPrinter');
