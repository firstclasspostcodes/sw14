
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="shield-quarter" d="M25.5459,4.8501A23.59806,23.59806,0,0,0,16,3,23.59806,23.59806,0,0,0,6.4541,4.8501,2.50667,2.50667,0,0,0,5,7.12158V14.5c0,7.81592,9.88086,13.106,10.30176,13.32715a1.49672,1.49672,0,0,0,1.39648,0C17.11914,27.606,27,22.31592,27,14.5V7.12158A2.50667,2.50667,0,0,0,25.5459,4.8501ZM16,24.76807V15H8.035C8.02124,14.83356,8,14.66791,8,14.5V7.44812A21.36836,21.36836,0,0,1,16,6v9h7.96356C23.58618,19.74945,17.99719,23.55713,16,24.76807Z"/>
</svg>
);

export const ShieldQuarter = createIcon(SVG, 'ShieldQuarter');
