
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="card-hearts" d="M26,10.5c0,6.5-5.65967,12.12634-9.65,16.14856a.488.488,0,0,1-.70008,0C11.65967,22.62634,6,17,6,10.5A5.53308,5.53308,0,0,1,11.5,5a5.66582,5.66582,0,0,1,4.12244,2.34564.48819.48819,0,0,0,.75512,0A5.66582,5.66582,0,0,1,20.5,5,5.53308,5.53308,0,0,1,26,10.5Z"/>
</svg>
);

export const CardHearts = createIcon(SVG, 'CardHearts');
