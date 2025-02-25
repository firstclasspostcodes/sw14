
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mobile-phone-lock" d="M21,13.81567V22H11V7h8V5a2.97586,2.97586,0,0,1,.17633-1H10.5A2.50263,2.50263,0,0,0,8,6.5v19A2.50263,2.50263,0,0,0,10.5,28h11A2.50263,2.50263,0,0,0,24,25.5V14H22A2.96485,2.96485,0,0,1,21,13.81567ZM17,25.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM31,4H30V2a2.0026,2.0026,0,0,0-2-2H25a2.0026,2.0026,0,0,0-2,2V4H22a1.00291,1.00291,0,0,0-1,1v6a1.00291,1.00291,0,0,0,1,1h9a1.00291,1.00291,0,0,0,1-1V5A1.00291,1.00291,0,0,0,31,4ZM28,4H25V2.25A.24994.24994,0,0,1,25.25,2h2.5a.24994.24994,0,0,1,.25.25Z"/>
</svg>
);

export const MobilePhoneLock = createIcon(SVG, 'MobilePhoneLock');
