
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="barrel" d="M24.5,14a1.5,1.5,0,0,0,0-3H24V7h.5a1.5,1.5,0,0,0,0-3H7.5a1.5,1.5,0,0,0,0,3H8v4H7.5a1.5,1.5,0,0,0,0,3H8v4H7.5a1.5,1.5,0,0,0,0,3H8v4H7.5a1.5,1.5,0,0,0,0,3h17a1.5,1.5,0,0,0,0-3H24V21h.5a1.5,1.5,0,0,0,0-3H24V14ZM12,24.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm0-7a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm0-7a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const Barrel = createIcon(SVG, 'Barrel');
