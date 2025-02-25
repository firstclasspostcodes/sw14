
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="slightly-smiling" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25ZM11,13.5v-1a1.5,1.5,0,0,1,3,0v1a1.5,1.5,0,0,1-3,0Zm10-1v1a1.5,1.5,0,0,1-3,0v-1a1.5,1.5,0,0,1,3,0Zm-.22656,5.86768a.99848.99848,0,0,1,.01562,1.24609A6.542,6.542,0,0,1,16,22a6.542,6.542,0,0,1-4.78906-2.38623A1.00014,1.00014,0,0,1,12.44629,18.105,9.37929,9.37929,0,0,0,16,19a9.37929,9.37929,0,0,0,3.55371-.895A1.00082,1.00082,0,0,1,20.77344,18.36768Z"/>
</svg>
);

export const SlightlySmiling = createIcon(SVG, 'SlightlySmiling');
