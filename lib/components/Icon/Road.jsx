
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="road" d="M28.971,25.689l-6.54547-20A1,1,0,0,0,21.4751,5H17.125L17.5,8h-3l.375-3H10.5249a1,1,0,0,0-.95038.689l-6.54547,20A1,1,0,0,0,3.97949,27H12.125l1.125-9h5.5l1.125,9h8.14551A1,1,0,0,0,28.971,25.689ZM13.625,15l.625-5h3.5l.625,5Z"/>
</svg>
);

export const Road = createIcon(SVG, 'Road');
