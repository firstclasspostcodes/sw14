
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="package" d="M22.95465,14.261,11.06659,6.19409l3.96173-2.37671,11.99982,7.99951ZM9.17657,7.32812,5.028,9.81689l12.00019,8L21.06476,15.395ZM4,19.53516l12,7.99975V19.53516l-12-8Zm20-3.56885v2.71655a.50018.50018,0,0,1-.24274.429l-1,.59985A.5.5,0,0,1,22,19.283V17.166l-4,2.40014v7.99951l10-5.99926V13.56616Z"/>
</svg>
);

export const Package = createIcon(SVG, 'Package');
