
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="king" d="M26,26v2H5V26a2,2,0,0,1,2-2H24A2,2,0,0,1,26,26ZM10.70709,15.707A1.0001,1.0001,0,0,1,11,16.41418V18.5a1.00029,1.00029,0,0,1-.4.8L8.2,21.1a.5.5,0,0,0,.3.9h14a.5.5,0,0,0,.3-.9l-2.4-1.79993a1.00029,1.00029,0,0,1-.4-.8V16.41418a1.0001,1.0001,0,0,1,.29291-.70715l3-3A1,1,0,0,0,22.58582,11H8.41418a1,1,0,0,0-.70709,1.707ZM13,7h1V9h3V7h1a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H17V3a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1V4H13a1,1,0,0,0-1,1V6A1,1,0,0,0,13,7Z"/>
</svg>
);

export const King = createIcon(SVG, 'King');
