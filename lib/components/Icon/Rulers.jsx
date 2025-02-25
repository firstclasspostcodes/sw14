
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="rulers" d="M28,5v5a1,1,0,0,1-1,1H11V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V26H5.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V22H5.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V18H5.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V14H5.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V10H5.5A.5.5,0,0,0,6,9.5v-1A.5.5,0,0,0,5.5,8H4V6H5.5A.5.5,0,0,0,6,5.5V4H8V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h1A1,1,0,0,1,28,5Z"/>
</svg>
);

export const Rulers = createIcon(SVG, 'Rulers');
