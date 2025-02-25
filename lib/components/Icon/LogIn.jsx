
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="log-in" d="M28,7.5v17A3.50424,3.50424,0,0,1,24.5,28h-12A3.50424,3.50424,0,0,1,9,24.5V20h3v4.5a.50641.50641,0,0,0,.5.5h12a.50641.50641,0,0,0,.5-.5V7.5a.50641.50641,0,0,0-.5-.5h-12a.50641.50641,0,0,0-.5.5V12H9V7.5A3.50424,3.50424,0,0,1,12.5,4h12A3.50424,3.50424,0,0,1,28,7.5ZM14,19.98877a.99989.99989,0,0,0,1.57019.82129l5.74628-3.98877a.99959.99959,0,0,0,0-1.64258l-5.74628-3.98877A.99989.99989,0,0,0,14,12.01123V14H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7Z"/>
</svg>
);

export const LogIn = createIcon(SVG, 'LogIn');
