
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="menu-close" d="M25.83881,23.01038a.5.5,0,0,1,0,.70715l-2.12128,2.12134a.50011.50011,0,0,1-.70709,0L16,18.82837l-7.01044,7.0105a.50011.50011,0,0,1-.70709,0L6.16119,23.71753a.5.5,0,0,1,0-.70715L13.17163,16,6.16119,8.9895a.49982.49982,0,0,1,0-.707L8.28247,6.16113a.5.5,0,0,1,.70709,0L16,13.17163l7.01044-7.0105a.5.5,0,0,1,.70709,0l2.12128,2.12134a.49982.49982,0,0,1,0,.707L18.82843,16Z"/>
</svg>
);

export const MenuClose = createIcon(SVG, 'MenuClose');
