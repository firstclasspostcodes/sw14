
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="umbrella" d="M28,17l-.0011.02148a4.94573,4.94573,0,0,0-7.03265,1.04688,6.99623,6.99623,0,0,0-9.93244,0A4.9458,4.9458,0,0,0,4.0011,17.02148L4,17A11.99443,11.99443,0,0,1,15,5.05054V4a1,1,0,0,1,2,0V5.05054A11.99443,11.99443,0,0,1,28,17ZM15,25a2.00273,2.00273,0,0,1-2.33765,1.97217A2.07892,2.07892,0,0,1,11,24.88794V24a1,1,0,0,0-2,0v.82178a4.12144,4.12144,0,0,0,3.60028,4.15869A4.00451,4.00451,0,0,0,17,25V18H15Z"/>
</svg>
);

export const Umbrella = createIcon(SVG, 'Umbrella');
