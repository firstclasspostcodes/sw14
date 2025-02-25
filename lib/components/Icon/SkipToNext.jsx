
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="skip-to-next" d="M20.44781,15.32617a.8.8,0,0,1,0,1.34766L10.23187,23.212a.8.8,0,0,1-1.2312-.67383V9.46185a.8.8,0,0,1,1.2312-.67383ZM23,8H22a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V9A1,1,0,0,0,23,8Z"/>
</svg>
);

export const SkipToNext = createIcon(SVG, 'SkipToNext');
