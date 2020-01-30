
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="user-worker" d="M27,25.23682V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V25.23682a1.578,1.578,0,0,1,.93115-1.36475l5.136-2.70508A5.02388,5.02388,0,0,0,14.55273,24h1.89454a5.02325,5.02325,0,0,0,4.48535-2.83325l5.13623,2.70532A1.578,1.578,0,0,1,27,25.23682ZM9.64478,15.12573a2.99219,2.99219,0,0,0,1.31073,1.46216l.66583,3.05151A2.99992,2.99992,0,0,0,14.55237,22h1.89526a2.99992,2.99992,0,0,0,2.931-2.3606l.66583-3.05151a2.9919,2.9919,0,0,0,1.31073-1.46216l.28-.75146A1.72884,1.72884,0,0,0,21.71179,14H9.28821a1.72884,1.72884,0,0,0,.0766.37427ZM8,12H23a1,1,0,0,0,0-2H21.97479a7.98784,7.98784,0,0,0-2.15893-5.53564L18.42163,6.68774a.5.5,0,0,1-.62219.19336l-.42987-.186a.50005.50005,0,0,1-.27722-.61255L18,3.27124V3a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v.27124l.90765,2.81128a.50005.50005,0,0,1-.27722.61255l-.42987.186a.5.5,0,0,1-.62219-.19336L11.18414,4.46436A7.98784,7.98784,0,0,0,9.02521,10H8a1,1,0,0,0,0,2Z"/>
</svg>
);

export const UserWorker = createIcon(SVG, 'UserWorker');
