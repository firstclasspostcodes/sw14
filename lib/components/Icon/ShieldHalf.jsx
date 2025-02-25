
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="shield-half" d="M25.5459,4.8501A23.59806,23.59806,0,0,0,16,3,23.59806,23.59806,0,0,0,6.4541,4.8501,2.50667,2.50667,0,0,0,5,7.12158V14.5c0,7.81592,9.88086,13.106,10.30176,13.32715a1.49672,1.49672,0,0,0,1.39648,0C17.11914,27.606,27,22.31592,27,14.5V7.12158A2.50667,2.50667,0,0,0,25.5459,4.8501ZM24,14.5c0,4.98242-5.9328,9.01465-8,10.26807V6a21.36755,21.36755,0,0,1,8,1.44824Z"/>
</svg>
);

export const ShieldHalf = createIcon(SVG, 'ShieldHalf');
