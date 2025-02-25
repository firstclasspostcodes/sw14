
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="wallet-minus" d="M19.765,11H8.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,8.5,9H18.589A7.9496,7.9496,0,0,1,18,6H8A3,3,0,0,0,5,9V23a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V13.73669A7.9252,7.9252,0,0,1,19.765,11ZM23.5,20A1.5,1.5,0,1,1,25,18.5,1.5,1.5,0,0,1,23.5,20ZM26,0a6,6,0,1,0,6,6A6,6,0,0,0,26,0Zm3,6.5a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const WalletMinus = createIcon(SVG, 'WalletMinus');
