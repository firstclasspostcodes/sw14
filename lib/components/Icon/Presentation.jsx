
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="presentation" d="M21,26.5c0,1.38074-2.01471,2.5-4.5,2.5S12,27.88074,12,26.5c0-1.08691,1.25623-2.00244,3-2.34692V19h3v5.15308C19.74377,24.49756,21,25.41309,21,26.5ZM25.174,6.78308A1.00005,1.00005,0,0,0,24.19781,6H12V4a1.001,1.001,0,0,1,1-1h.27747A1.99156,1.99156,0,0,0,15,4h1a2,2,0,0,0,0-4H15a1.99156,1.99156,0,0,0-1.72253,1H13a3.00328,3.00328,0,0,0-3,3V6H8.80219a1.00005,1.00005,0,0,0-.9762.78308L6,15v1a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V15Z"/>
</svg>
);

export const Presentation = createIcon(SVG, 'Presentation');
