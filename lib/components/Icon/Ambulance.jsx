
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="ambulance" d="M22,15v2a1,1,0,0,1-1,1H18v3a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V18H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v3h3A1,1,0,0,1,22,15Zm5-6.5v15A3.50424,3.50424,0,0,1,23.5,27H8.5498a3.50425,3.50425,0,0,1-3.5-3.5V8.5a3.50425,3.50425,0,0,1,3.5-3.5H23.5A3.50424,3.50424,0,0,1,27,8.5Zm-3,0a.501.501,0,0,0-.5-.5H8.5498a.501.501,0,0,0-.5.5v15a.501.501,0,0,0,.5.5H23.5a.501.501,0,0,0,.5-.5Z"/>
</svg>
);

export const Ambulance = createIcon(SVG, 'Ambulance');
