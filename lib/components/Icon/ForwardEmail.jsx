
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="forward-email" d="M27.82965,16.81921l-9.25622,6.47937A1,1,0,0,1,17,22.47931V19L4.88538,17.60217A1,1,0,0,1,4,16.60876V15.39124a1,1,0,0,1,.88538-.99341L17,13V9.52063a1,1,0,0,1,1.57343-.81921l9.25622,6.47931A1,1,0,0,1,27.82965,16.81921Z"/>
</svg>
);

export const ForwardEmail = createIcon(SVG, 'ForwardEmail');
