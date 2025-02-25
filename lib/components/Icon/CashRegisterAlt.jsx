
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cash-register-alt" d="M27.27637,19.55273l-1-2A.99976.99976,0,0,0,25.382,17H18V15h5a.99943.99943,0,0,0,1-1V5a.99943.99943,0,0,0-1-1H9A.99943.99943,0,0,0,8,5v9a.99943.99943,0,0,0,1,1h5v2H6.618a.99976.99976,0,0,0-.89441.55273l-1,2A.98559.98559,0,0,0,4.62268,20H27.37732A.98559.98559,0,0,0,27.27637,19.55273ZM10,13V6H22v7Zm17,9H5a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V23A1,1,0,0,0,27,22ZM17,25.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const CashRegisterAlt = createIcon(SVG, 'CashRegisterAlt');
