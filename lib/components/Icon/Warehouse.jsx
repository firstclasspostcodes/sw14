
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="warehouse" d="M27.65991,15.65991,16.53033,4.53027a.75.75,0,0,0-1.06066,0L4.34009,15.65991A.785.785,0,0,0,4.89517,17H7V27.5a.5.5,0,0,0,.5.5H10V26H22v2h2.5a.5.5,0,0,0,.5-.5V17h2.10483A.785.785,0,0,0,27.65991,15.65991ZM22,22v2H10V22Zm0-4v2H10V18Z"/>
</svg>
);

export const Warehouse = createIcon(SVG, 'Warehouse');
