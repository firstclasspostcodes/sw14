
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="wallet-lock" d="M19,11H8.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,8.5,9H19V6H8A3,3,0,0,0,5,9V23a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V14H22A3.00328,3.00328,0,0,1,19,11Zm4.5,6A1.5,1.5,0,1,1,22,18.5,1.5,1.5,0,0,1,23.5,17ZM31,4H30V2a2.0026,2.0026,0,0,0-2-2H25a2.0026,2.0026,0,0,0-2,2V4H22a1.003,1.003,0,0,0-1,1v6a1.003,1.003,0,0,0,1,1h9a1.003,1.003,0,0,0,1-1V5A1.003,1.003,0,0,0,31,4ZM28,4H25V2.25A.25.25,0,0,1,25.25,2h2.5a.25.25,0,0,1,.25.25Z"/>
</svg>
);

export const WalletLock = createIcon(SVG, 'WalletLock');
