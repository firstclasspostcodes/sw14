
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="usb-device-lock" d="M22,14h3V25a3.00328,3.00328,0,0,1-3,3H10a3.00328,3.00328,0,0,1-3-3V14a.99943.99943,0,0,1,1-1H9V5a.99943.99943,0,0,1,1-1h9.17633A2.97586,2.97586,0,0,0,19,5V6H11v7h8.78027A2.98154,2.98154,0,0,0,22,14Zm-7-4V8H13v2Zm2,0h2V8H17ZM32,5v6a1.003,1.003,0,0,1-1,1H22a1.003,1.003,0,0,1-1-1V5a1.003,1.003,0,0,1,1-1h1V2a2.0026,2.0026,0,0,1,2-2h3a2.0026,2.0026,0,0,1,2,2V4h1A1.003,1.003,0,0,1,32,5ZM25,4h3V2.25A.25.25,0,0,0,27.75,2h-2.5a.25.25,0,0,0-.25.25Z"/>
</svg>
);

export const UsbDeviceLock = createIcon(SVG, 'UsbDeviceLock');
