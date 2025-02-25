
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="monitor-vertical" d="M22.5,3H9.5A1.50039,1.50039,0,0,0,8,4.5v17A1.50039,1.50039,0,0,0,9.5,23h13A1.50039,1.50039,0,0,0,24,21.5V4.5A1.50039,1.50039,0,0,0,22.5,3ZM21,20H11V6H21Zm-1,6v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h6A1,1,0,0,1,20,26Z"/>
</svg>
);

export const MonitorVertical = createIcon(SVG, 'MonitorVertical');
