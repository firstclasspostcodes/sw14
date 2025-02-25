
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="list" d="M28,24v1a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V24a1,1,0,0,1,1-1H27A1,1,0,0,1,28,24Zm-1-7H11a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Zm0-6H11a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H11a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5ZM6,23H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V24A1,1,0,0,0,6,23Zm0-6H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V18A1,1,0,0,0,6,17Zm0-6H5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V12A1,1,0,0,0,6,11ZM6,5H5A1,1,0,0,0,4,6V7A1,1,0,0,0,5,8H6A1,1,0,0,0,7,7V6A1,1,0,0,0,6,5Z"/>
</svg>
);

export const List = createIcon(SVG, 'List');
