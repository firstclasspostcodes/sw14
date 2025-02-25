
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="motor-oil" d="M24,5V6a1,1,0,0,1-1,1H18a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5A1,1,0,0,1,24,5ZM23,9.5V25a3,3,0,0,1-3,3H11a3,3,0,0,1-3-3V16.69849A2.99989,2.99989,0,0,1,9.45654,14.1261L18,9h4.5A.5.5,0,0,1,23,9.5Zm-5.77637,3.46484a1.00081,1.00081,0,0,0-1.37207-.34277l-5.36621,3.21875a1,1,0,0,0,1.0293,1.71484l5.36621-3.21875A1,1,0,0,0,17.22363,12.96484Z"/>
</svg>
);

export const MotorOil = createIcon(SVG, 'MotorOil');
