
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cot" d="M25.5,7h-2a.5.5,0,0,0-.5.5V10H9V7.5A.5.5,0,0,0,8.5,7h-2a.5.5,0,0,0-.5.5v19a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V23H23v3.5a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V7.5A.5.5,0,0,0,25.5,7ZM11,17H9V12h2Zm4,0H13V12h2Zm4,0H17V12h2Zm4,0H21V12h2Z"/>
</svg>
);

export const Cot = createIcon(SVG, 'Cot');
