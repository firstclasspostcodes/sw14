
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="indent-right" d="M28,15.5v1a.5.5,0,0,1-.5.5H25v1.2312a.5.5,0,0,1-.80365.39722l-2.91925-2.2312a.49992.49992,0,0,1,0-.79444l2.91925-2.2312A.5.5,0,0,1,25,13.7688V15h2.5A.5.5,0,0,1,28,15.5ZM18,4H17a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V5A1,1,0,0,0,18,4ZM5,8H9a1,1,0,0,0,1-1V6A1,1,0,0,0,9,5H5A1,1,0,0,0,4,6V7A1,1,0,0,0,5,8Zm8,3H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,13,11ZM5,20h6a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v1A1,1,0,0,0,5,20Zm8,3H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V24A1,1,0,0,0,13,23Z"/>
</svg>
);

export const IndentRight = createIcon(SVG, 'IndentRight');
