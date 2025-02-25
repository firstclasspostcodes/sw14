
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="indent-left" d="M16,5V27a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h1A1,1,0,0,1,16,5Zm3,3h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V7A1,1,0,0,0,19,8Zm8,3H19a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm-8,9h6a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1v1A1,1,0,0,0,19,20Zm8,3H19a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23ZM7.80365,13.37158A.5.5,0,0,0,7,13.7688V15H4.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H7v1.2312a.5.5,0,0,0,.80365.39722l2.91925-2.2312a.49992.49992,0,0,0,0-.79444Z"/>
</svg>
);

export const IndentLeft = createIcon(SVG, 'IndentLeft');
