
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="usb-device-eject" d="M23.16815,5.18335,26.613.9729a.50013.50013,0,0,1,.77392,0l3.44489,4.21045A.5.5,0,0,1,30.44489,6H23.55511A.5.5,0,0,1,23.16815,5.18335ZM19,10V8H17v2Zm5,3H23V11.94946A3.13522,3.13522,0,0,1,21,10v3H11V6H21V5.28174A1.77758,1.77758,0,0,1,21.55054,4H10A.99943.99943,0,0,0,9,5v8H8a.99943.99943,0,0,0-1,1V25a3.00328,3.00328,0,0,0,3,3H22a3.00328,3.00328,0,0,0,3-3V14A.99943.99943,0,0,0,24,13Zm-9-3V8H13v2ZM30.5,8h-7a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,30.5,8Z"/>
</svg>
);

export const UsbDeviceEject = createIcon(SVG, 'UsbDeviceEject');
