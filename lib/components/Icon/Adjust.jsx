
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="adjust" d="M14,25h3v2a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1ZM9,12H8V5A1,1,0,0,0,7,4H6A1,1,0,0,0,5,5v7H4a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V13A1,1,0,0,0,9,12ZM5,27a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V19H5ZM27,10H26V5a1,1,0,0,0-1-1H24a1,1,0,0,0-1,1v5H22a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V11A1,1,0,0,0,27,10ZM23,27a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V17H23Zm-5-9H17V5a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1V18H13a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V19A1,1,0,0,0,18,18Z"/>
</svg>
);

export const Adjust = createIcon(SVG, 'Adjust');
