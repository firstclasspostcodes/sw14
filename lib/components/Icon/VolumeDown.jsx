
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="volume-down" d="M16.00012,8.63647V23.36353a.8.8,0,0,1-1.29138.63128L9.57654,20H5a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H9.57654l5.1322-3.99481A.8.8,0,0,1,16.00012,8.63647Zm4.623,3.36255a1.00134,1.00134,0,0,0-1.5163-.10656l-.57318.57373a1.01339,1.01339,0,0,0-.10437,1.284,4.11089,4.11089,0,0,1,0,4.49964,1.01339,1.01339,0,0,0,.10437,1.284l.57318.57373a1.00134,1.00134,0,0,0,1.5163-.10656,6.90528,6.90528,0,0,0,0-8.002Z"/>
</svg>
);

export const VolumeDown = createIcon(SVG, 'VolumeDown');
