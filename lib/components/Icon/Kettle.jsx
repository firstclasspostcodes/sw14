
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="kettle" d="M23,7H9a3,3,0,0,1,3-3h8A3,3,0,0,1,23,7ZM8,26a2.00229,2.00229,0,0,0,2,2H22a2.00229,2.00229,0,0,0,2-2V25H8ZM27,11v5a1,1,0,0,1-2,0V11H23V23H9V12.82812L6.87891,10.707A.99991.99991,0,0,1,7.58594,9H25A2.00229,2.00229,0,0,1,27,11Zm-7,.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H18v2H16.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H18v2H16.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const Kettle = createIcon(SVG, 'Kettle');
