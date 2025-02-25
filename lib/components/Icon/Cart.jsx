
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cart" d="M13,26.5A1.5,1.5,0,1,1,11.5,25,1.5,1.5,0,0,1,13,26.5ZM21.5,25A1.5,1.5,0,1,0,23,26.5,1.5,1.5,0,0,0,21.5,25ZM27.96436,8.82544l-2,9A1.49988,1.49988,0,0,1,24.5,19H11.77l.4375,2H23a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H11a1.5,1.5,0,0,1-1.46533-1.17944L6.29248,8H4A1,1,0,0,1,3,7V6A1,1,0,0,1,4,5H7.5A1.49993,1.49993,0,0,1,8.96533,6.17944L9.14484,7H26.5a1.50029,1.50029,0,0,1,1.46436,1.82544ZM24.62988,10H9.80115l1.31256,6H23.29688Z"/>
</svg>
);

export const Cart = createIcon(SVG, 'Cart');
