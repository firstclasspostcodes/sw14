
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cash-register" d="M27,16.47217a2.00066,2.00066,0,0,0-.21112-.89453l-1.51251-3.02491A.99976.99976,0,0,0,24.382,12H22V10h3a.99943.99943,0,0,0,1-1V5a.99943.99943,0,0,0-1-1H14.98633a.99942.99942,0,0,0-1,1V9a.99942.99942,0,0,0,1,1H18v2H7.618a.99976.99976,0,0,0-.89441.55273L5.21112,15.57764A2.00066,2.00066,0,0,0,5,16.47217V20H27ZM15.98633,6H24V8H15.98633ZM27,22H5a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V23A1,1,0,0,0,27,22ZM17,25.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const CashRegister = createIcon(SVG, 'CashRegister');
