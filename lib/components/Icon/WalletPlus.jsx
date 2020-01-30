
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="wallet-plus" d="M26,0a6,6,0,1,0,6,6A6,6,0,0,0,26,0Zm3,6.5a.5.5,0,0,1-.5.5H27V8.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V7H23.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H25V3.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5V5h1.5a.5.5,0,0,1,.5.5ZM26,14A7.9847,7.9847,0,0,1,19.765,11H8.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,8.5,9H18.589A7.9496,7.9496,0,0,1,18,6H8A3,3,0,0,0,5,9V23a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V13.73669A7.95942,7.95942,0,0,1,26,14Zm-2.5,6A1.5,1.5,0,1,1,25,18.5,1.5,1.5,0,0,1,23.5,20Z"/>
</svg>
);

export const WalletPlus = createIcon(SVG, 'WalletPlus');
