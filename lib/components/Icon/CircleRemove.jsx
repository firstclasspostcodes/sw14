
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-remove" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm5.30328,14.47485a.49991.49991,0,0,1,0,.707L19.182,21.30322a.5.5,0,0,1-.70716,0L16,18.82837l-2.47485,2.47485a.5.5,0,0,1-.70716,0l-2.12127-2.12134a.49991.49991,0,0,1,0-.707L13.17157,16l-2.47485-2.47485a.50007.50007,0,0,1,0-.70716L12.818,10.69666a.50018.50018,0,0,1,.70716,0L16,13.17151l2.47485-2.47485a.50018.50018,0,0,1,.70716,0L21.30328,12.818a.50007.50007,0,0,1,0,.70716L18.82843,16Z"/>
</svg>
);

export const CircleRemove = createIcon(SVG, 'CircleRemove');
