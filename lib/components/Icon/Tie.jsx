
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tie" d="M20.63257,25.36743l-4.27844,4.27844a.5.5,0,0,1-.70771-.00055l-4.28015-4.29351a.99989.99989,0,0,1-.27685-.87842L13.44708,11h5.10547l2.358,13.4881A1,1,0,0,1,20.63257,25.36743ZM13.7998,8.98438,13.79706,9h4.40588l-.00274-.01562L19.66974,5.6925a.5.5,0,0,0-.31049-.682L16.14606,4.029a.50048.50048,0,0,0-.29212,0l-3.21319.98151a.5.5,0,0,0-.31049.682Z"/>
</svg>
);

export const Tie = createIcon(SVG, 'Tie');
