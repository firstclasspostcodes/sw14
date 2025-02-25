
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="medicine" d="M20.83008,9.34863l-.28223-.18554A1.00249,1.00249,0,0,0,20,9H12a1.00249,1.00249,0,0,0-.54785.16309l-.28223.18554A6.97259,6.97259,0,0,0,8,15.207V26a2.0026,2.0026,0,0,0,2,2H22a2.0026,2.0026,0,0,0,2-2V15.207A6.97259,6.97259,0,0,0,20.83008,9.34863ZM21,21.5a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5v-4a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5ZM11,6V5a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H12A1,1,0,0,1,11,6Z"/>
</svg>
);

export const Medicine = createIcon(SVG, 'Medicine');
