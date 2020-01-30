
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bell-off" d="M26,22.07037V23a1,1,0,0,1-1,1H11.96692L22.97577,12.99133c.00415.10163.02423.19977.02423.30213v3.56579a3.99993,3.99993,0,0,0,1.78119,3.32819l.32819.21881A2.00005,2.00005,0,0,1,26,22.07037ZM14,27a2,2,0,0,0,4,0V26H14ZM27.21484,2.93945a1.49946,1.49946,0,0,0-2.12109,0L20.38843,7.64471A6.78447,6.78447,0,0,0,18,6.31073V5a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1V6.29364A7.00018,7.00018,0,0,0,9,13v3.85925a3.99993,3.99993,0,0,1-1.78119,3.32819l-.32819.21881a1.99719,1.99719,0,0,0-.88531,1.62122L2.93945,25.09326a1.49984,1.49984,0,1,0,2.1211,2.1211L27.21484,5.06055A1.49946,1.49946,0,0,0,27.21484,2.93945Z"/>
</svg>
);

export const BellOff = createIcon(SVG, 'BellOff');
