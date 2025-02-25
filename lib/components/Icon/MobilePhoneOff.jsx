
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mobile-phone-off" d="M27.21484,2.93945a1.49946,1.49946,0,0,0-2.12109,0L23.282,4.75122A2.48976,2.48976,0,0,0,21.5,4h-11A2.50263,2.50263,0,0,0,8,6.5V20.03284L2.93945,25.09326a1.49984,1.49984,0,1,0,2.1211,2.1211L27.21484,5.06055A1.49946,1.49946,0,0,0,27.21484,2.93945ZM21,7.0332,11,17.033V7H21ZM21,22H13.967L8.718,27.24884A2.49,2.49,0,0,0,10.5,28h11A2.50263,2.50263,0,0,0,24,25.5V11.96716L21,14.967Zm-4,3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const MobilePhoneOff = createIcon(SVG, 'MobilePhoneOff');
