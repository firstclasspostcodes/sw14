
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="send-to-back" d="M15,5v9a.99943.99943,0,0,1-1,1H5a.99943.99943,0,0,1-1-1V5A.99943.99943,0,0,1,5,4h9A.99943.99943,0,0,1,15,5ZM27,17H18a.99943.99943,0,0,0-1,1v9a.99943.99943,0,0,0,1,1h9a.99943.99943,0,0,0,1-1V18A.99943.99943,0,0,0,27,17Zm-7-2h3V10.5A1.50039,1.50039,0,0,0,21.5,9H17v3h3Zm-8,2H9v4.5A1.50039,1.50039,0,0,0,10.5,23H15V20H12Z"/>
</svg>
);

export const SendToBack = createIcon(SVG, 'SendToBack');
