
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="announcement" d="M10.13037,20.13281l2.953.90869-.93408,5.13721A1.00006,1.00006,0,0,1,11.16541,27H9a1,1,0,0,1-1-1V20H9.248A3.00268,3.00268,0,0,1,10.13037,20.13281ZM9.24817,11H6a2.00006,2.00006,0,0,0-2,2v3a2.00006,2.00006,0,0,0,2,2H9.24817a5.00323,5.00323,0,0,1,1.4704.22119L23,22V7L10.71857,10.77881A5.00323,5.00323,0,0,1,9.24817,11ZM27,5H26a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Z"/>
</svg>
);

export const Announcement = createIcon(SVG, 'Announcement');
