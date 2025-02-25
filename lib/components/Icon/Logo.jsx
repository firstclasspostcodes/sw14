
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg xmlns="http://www.w3.org/2000/svg" width="285.744" height="287.534" viewBox="0 0 285.744 287.534">
  <g id="Logo" transform="translate(-112.228 -111.893)">
    <path id="Path_2" data-name="Path 2" d="M141.308,226.429H212.2v57.736H141.308l-29.08-29.08Z"/>
    <path id="Path_1" data-name="Path 1" d="M226.828,399.427V111.893h57.447v43.782h85.158l28.54,28.54-28.54,28.54H284.275V399.427Z"/>
  </g>
</svg>
);

export const Logo = createIcon(SVG, 'Logo');
