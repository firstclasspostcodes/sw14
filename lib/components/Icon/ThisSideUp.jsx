
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="this-side-up" d="M5.14886,10.41357l4.0412-5.58081a1,1,0,0,1,1.61988,0l4.0412,5.58081A.99994.99994,0,0,1,14.0412,12H12v9a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V12H5.9588A.99994.99994,0,0,1,5.14886,10.41357ZM17.9588,12H20v9a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12h2.0412a.99994.99994,0,0,0,.80994-1.58643l-4.0412-5.58081a1,1,0,0,0-1.61988,0l-4.0412,5.58081A.99994.99994,0,0,0,17.9588,12ZM27,24H5a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V25A1,1,0,0,0,27,24Z"/>
</svg>
);

export const ThisSideUp = createIcon(SVG, 'ThisSideUp');
