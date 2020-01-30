
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="log-out" d="M20.71094,22.45312,23,20.86407V24.5A3.50424,3.50424,0,0,1,19.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5V7.5A3.50424,3.50424,0,0,1,7.5,4h12A3.50424,3.50424,0,0,1,23,7.5v3.63617L20.71094,9.54736A3.00059,3.00059,0,0,0,20,9.188V7.5a.50641.50641,0,0,0-.5-.5H7.5a.50641.50641,0,0,0-.5.5v17a.50641.50641,0,0,0,.5.5h12a.50641.50641,0,0,0,.5-.5V22.81207A3.00319,3.00319,0,0,0,20.71094,22.45312Zm4.60553-7.27441-5.74628-3.98877A.99989.99989,0,0,0,18,12.01123V14H11a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7v1.98877a.99989.99989,0,0,0,1.57019.82129l5.74628-3.98877A.99959.99959,0,0,0,25.31647,15.17871Z"/>
</svg>
);

export const LogOut = createIcon(SVG, 'LogOut');
