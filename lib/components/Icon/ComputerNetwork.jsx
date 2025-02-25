
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="computer-network" d="M17,14V12a1,1,0,0,0-1-1H15V5a.99943.99943,0,0,0-1-1H7A.99943.99943,0,0,0,6,5v6H5a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H16A1,1,0,0,0,17,14Zm-4-4H8V6h5ZM27,24H26V18a.99943.99943,0,0,0-1-1H18a.99943.99943,0,0,0-1,1v6H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V25A1,1,0,0,0,27,24Zm-3-1H19V19h5ZM14,23a.99943.99943,0,0,1-1,1H8a.99943.99943,0,0,1-1-1V18a1,1,0,0,1,2,0v4h4A.99943.99943,0,0,1,14,23ZM18,8a.99943.99943,0,0,1,1-1h5a.99943.99943,0,0,1,1,1v5a1,1,0,0,1-2,0V9H19A.99943.99943,0,0,1,18,8Z"/>
</svg>
);

export const ComputerNetwork = createIcon(SVG, 'ComputerNetwork');
