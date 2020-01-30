
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="football" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm1,3.6,2.44189-.97675A9.99973,9.99973,0,0,1,22.39862,8.324l.37073,2.57324-3.46942,1.542L17,10.76831ZM9.60138,8.324a9.99842,9.99842,0,0,1,2.95673-1.70081L15,7.6v3.17779l-2.29181,1.6651L9.23065,10.89728Zm-3.18,10.53387a9.69831,9.69831,0,0,1-.26477-4.564l2.09094-1.64532,3.32257,1.47675,1.04346,3.21148-2.41236,2.74329Zm12.3294,6.74835a9.80581,9.80581,0,0,1-5.50158,0l-1.47028-4.292,2.11176-2.40143h4.21862l2.11176,2.40143Zm3.048-5.52618-2.40283-2.73242,1.04919-3.22913,3.30731-1.47,2.09094,1.64532a9.69831,9.69831,0,0,1-.26477,4.564Z"/>
</svg>
);

export const Football = createIcon(SVG, 'Football');
