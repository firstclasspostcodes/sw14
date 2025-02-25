
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="credit-card-off" d="M27.21484,5.06055,5.06055,27.21436a1.49984,1.49984,0,0,1-2.1211-2.1211l1.25232-1.25232A1.97841,1.97841,0,0,1,4,23V15h9.033L17.033,11H4V9A2.00229,2.00229,0,0,1,6,7H21.03314l4.06061-4.06055a1.49984,1.49984,0,0,1,2.12109,2.1211Zm.59339,3.09851L24.96722,11H28V9A1.97841,1.97841,0,0,0,27.80823,8.15906ZM20.9671,15H28v8a2.00229,2.00229,0,0,1-2,2H10.96686ZM24.5,19h-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,24.5,19Z"/>
</svg>
);

export const CreditCardOff = createIcon(SVG, 'CreditCardOff');
