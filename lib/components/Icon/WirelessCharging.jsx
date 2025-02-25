
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="wireless-charging" d="M16,7a9,9,0,1,0,9,9A9.00984,9.00984,0,0,0,16,7Zm3.85834,8.835-4.061,4.50342a.5.5,0,0,1-.868-.39209L15.26923,17H12.513a.50008.50008,0,0,1-.37134-.835l4.061-4.50366a.5.5,0,0,1,.868.39233L16.73077,15H19.487A.50008.50008,0,0,1,19.85834,15.835ZM16,3A13,13,0,1,0,29,16,13.01505,13.01505,0,0,0,16,3Zm0,24A11,11,0,1,1,27,16,11.01245,11.01245,0,0,1,16,27Z"/>
</svg>
);

export const WirelessCharging = createIcon(SVG, 'WirelessCharging');
