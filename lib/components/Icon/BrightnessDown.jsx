
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="brightness-down" d="M15.5,11A4.5,4.5,0,1,0,20,15.5,4.50491,4.50491,0,0,0,15.5,11Zm0,6A1.5,1.5,0,1,1,17,15.5,1.50164,1.50164,0,0,1,15.5,17Zm0-9a7.5349,7.5349,0,0,0-1.5.15057V6a1.5,1.5,0,0,1,3,0V8.15057A7.5349,7.5349,0,0,0,15.5,8ZM7.7218,9.84314A1.5,1.5,0,0,1,9.84314,7.7218l1.523,1.523a7.534,7.534,0,0,0-2.12134,2.12134ZM8.15057,17H6a1.5,1.5,0,0,1,0-3H8.15057a7.54689,7.54689,0,0,0,0,3ZM19.63385,9.24481l1.523-1.523A1.5,1.5,0,0,1,23.2782,9.84314l-1.523,1.523A7.534,7.534,0,0,0,19.63385,9.24481ZM23.2782,21.15686a1.5,1.5,0,0,1-2.12134,2.12134l-1.523-1.523a7.534,7.534,0,0,0,2.12134-2.12134ZM26.5,15.5A1.50008,1.50008,0,0,1,25,17H22.84943a7.54689,7.54689,0,0,0,0-3H25A1.50008,1.50008,0,0,1,26.5,15.5ZM15.5,23a7.5349,7.5349,0,0,0,1.5-.15057V25a1.5,1.5,0,0,1-3,0V22.84943A7.5349,7.5349,0,0,0,15.5,23Zm-4.13385-1.24481-1.523,1.523A1.5,1.5,0,0,1,7.7218,21.15686l1.523-1.523A7.534,7.534,0,0,0,11.36615,21.75519Z"/>
</svg>
);

export const BrightnessDown = createIcon(SVG, 'BrightnessDown');
