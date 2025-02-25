
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="save" d="M28,23v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1H27A1,1,0,0,1,28,23ZM15.18628,19.36078a1,1,0,0,0,1.62744,0l5.55682-7.77954A1,1,0,0,0,21.55682,10H19V4a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v6H10.44318a1,1,0,0,0-.81372,1.58124Z"/>
</svg>
);

export const Save = createIcon(SVG, 'Save');
