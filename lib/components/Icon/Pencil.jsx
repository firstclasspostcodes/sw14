
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pencil" d="M27.414,8.82812l-2.08588,2.08594L21.08588,6.67188l2.08587-2.08594a.99985.99985,0,0,1,1.41425,0l2.828,2.82812A.99986.99986,0,0,1,27.414,8.82812ZM8.08594,19.67188l4.24218,4.24218L23.91406,12.32812,19.67181,8.08594ZM4.27667,27.09863a.50005.50005,0,0,0,.62476.62476l5.92773-2.48023L6.75677,21.1709Z"/>
</svg>
);

export const Pencil = createIcon(SVG, 'Pencil');
