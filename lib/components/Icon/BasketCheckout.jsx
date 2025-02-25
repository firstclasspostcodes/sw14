
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="basket-checkout" d="M9,8.5v-2A.5.5,0,0,1,9.5,6H18V3.74121a.50008.50008,0,0,1,.79474-.40405l5.15167,3.75891a.49989.49989,0,0,1,0,.80774l-5.15167,3.759A.50008.50008,0,0,1,18,11.25879V9H9.5A.5.5,0,0,1,9,8.5ZM28,15v2a.99943.99943,0,0,1-1,1H25.5l-.81989,8.199A2,2,0,0,1,22.69,28H9.31a2,2,0,0,1-1.99011-1.801L6.5,18H5a.99943.99943,0,0,1-1-1V15a.99943.99943,0,0,1,1-1H27A.99943.99943,0,0,1,28,15ZM12,23H10v2h2Zm0-5H10v2h2Zm5,5H15v2h2Zm0-5H15v2h2Zm5,5H20v2h2Zm0-5H20v2h2Z"/>
</svg>
);

export const BasketCheckout = createIcon(SVG, 'BasketCheckout');
