
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="computer-network-alt" d="M10,15H21a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H20V5a.99943.99943,0,0,0-1-1H12a.99943.99943,0,0,0-1,1v6H10a1,1,0,0,0-1,1v2A1,1,0,0,0,10,15Zm3-9h5v4H13Zm0,18H12V18a.99943.99943,0,0,0-1-1H4a.99943.99943,0,0,0-1,1v6H2a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V25A1,1,0,0,0,13,24Zm-3-1H5V19h5Zm19,1H28V18a.99943.99943,0,0,0-1-1H20a.99943.99943,0,0,0-1,1v6H18a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V25A1,1,0,0,0,29,24Zm-3-1H21V19h5Z"/>
</svg>
);

export const ComputerNetworkAlt = createIcon(SVG, 'ComputerNetworkAlt');
