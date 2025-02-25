
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="skip-to-end" d="M15.44781,15.32617a.8.8,0,0,1,0,1.34766L5.23187,23.212a.8.8,0,0,1-1.2312-.67383V9.46185A.8.8,0,0,1,5.23187,8.788ZM17.23187,8.788a.8.8,0,0,0-1.2312.67383V22.53821a.8.8,0,0,0,1.2312.67383l10.21594-6.53821a.8.8,0,0,0,0-1.34766ZM30,8H29a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V9A1,1,0,0,0,30,8Z"/>
</svg>
);

export const SkipToEnd = createIcon(SVG, 'SkipToEnd');
