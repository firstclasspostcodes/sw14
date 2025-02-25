
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="forward" d="M15.44781,15.32617a.8.8,0,0,1,0,1.34766L5.23187,23.212a.8.8,0,0,1-1.2312-.67383V9.46185A.8.8,0,0,1,5.23187,8.788Zm12,0L17.23187,8.788a.8.8,0,0,0-1.2312.67383V22.53821a.8.8,0,0,0,1.2312.67383l10.21594-6.53821A.8.8,0,0,0,27.44781,15.32617Z"/>
</svg>
);

export const Forward = createIcon(SVG, 'Forward');
