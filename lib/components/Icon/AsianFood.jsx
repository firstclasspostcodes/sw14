
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="asian-food" d="M28,16a11.98163,11.98163,0,0,1-5,9.72687V27a.99974.99974,0,0,1-1,1H10a.99974.99974,0,0,1-1-1V25.72687A11.98163,11.98163,0,0,1,4,16a.99974.99974,0,0,1,1-1H27A.99974.99974,0,0,1,28,16ZM25.17694,4.0976a.5.5,0,0,0-.11377-.70679l-1.61481-1.1366a.50006.50006,0,0,0-.70373.13141L15.66357,13h2.90857ZM28.21448,8.561,26.80627,7.17664a.5.5,0,0,0-.71569.015L20.65936,13H24.364l3.84772-3.72314A.5.5,0,0,0,28.21448,8.561Z"/>
</svg>
);

export const AsianFood = createIcon(SVG, 'AsianFood');
