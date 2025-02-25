
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="barcode" d="M6,26h6v2H6ZM6,4H4V24H6Zm4,0H8V24h2Zm8,0H14V24h4ZM14,28h2V26H14Zm4,0h2V26H18Zm4,0h4V26H22ZM24,4V24h4V4ZM22,4H20V24h2Z"/>
</svg>
);

export const Barcode = createIcon(SVG, 'Barcode');
