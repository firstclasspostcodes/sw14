
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="payment" d="M10,20a5.99692,5.99692,0,0,1-5-2.69043V24a2.0026,2.0026,0,0,0,2,2H25a2.0026,2.0026,0,0,0,2-2V16H15.65A6.00469,6.00469,0,0,1,10,20Zm9,.5a.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5ZM27,11v1H15.65a6.02422,6.02422,0,0,0-2.34039-3H25A2.0026,2.0026,0,0,1,27,11ZM4.09656,12.95935A3.49081,3.49081,0,1,1,7.81226,8.419,6.01116,6.01116,0,0,0,4.09656,12.95935ZM10,10a4,4,0,1,1-4,4A3.99992,3.99992,0,0,1,10,10Z"/>
</svg>
);

export const Payment = createIcon(SVG, 'Payment');
