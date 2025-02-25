
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="basket" d="M12.30273,12H8.69727L12.252,6.668A1.5,1.5,0,0,1,14.74805,8.332Zm7.39454,0h3.60546L19.74805,6.668A1.5,1.5,0,0,0,17.252,8.332ZM28,15v2a.99943.99943,0,0,1-1,1H25.5l-.81989,8.199A2,2,0,0,1,22.69,28H9.31a2,2,0,0,1-1.99011-1.801L6.5,18H5a.99943.99943,0,0,1-1-1V15a.99943.99943,0,0,1,1-1H27A.99943.99943,0,0,1,28,15ZM12,23H10v2h2Zm0-5H10v2h2Zm5,5H15v2h2Zm0-5H15v2h2Zm5,5H20v2h2Zm0-5H20v2h2Z"/>
</svg>
);

export const Basket = createIcon(SVG, 'Basket');
