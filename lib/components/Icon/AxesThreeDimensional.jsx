
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="axes-three-dimensional" d="M27,21v6a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h1.82452L15.5,18.88623,9.17548,25H11a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1H6a1,1,0,0,1,1,1v1.93018l7-6.76661V9.12109l-1.29291,1.293a1.00022,1.00022,0,0,1-1.41418,0L10.586,9.707a.99986.99986,0,0,1,0-1.41406l4.20691-4.207a1.00022,1.00022,0,0,1,1.41418,0L20.414,8.293a.99986.99986,0,0,1,0,1.41406l-.70691.707a1.00022,1.00022,0,0,1-1.41418,0L17,9.12109v7.04248l7,6.76661V21a1,1,0,0,1,1-1h1A1,1,0,0,1,27,21Z"/>
</svg>
);

export const AxesThreeDimensional = createIcon(SVG, 'AxesThreeDimensional');
