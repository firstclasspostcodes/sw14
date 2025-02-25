
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vector-path-circle" d="M28,13H26.45135A11.54707,11.54707,0,0,0,19,5.54871V4a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V5.54871A11.54707,11.54707,0,0,0,4.54865,13H3a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H4.54865A11.54707,11.54707,0,0,0,12,27.45129V29a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V27.45129A11.54707,11.54707,0,0,0,26.45135,20H28a1,1,0,0,0,1-1V14A1,1,0,0,0,28,13ZM7,18H4V15H7ZM14,5h3V8H14Zm3,23H14V25h3Zm6-8h.23706A8.54248,8.54248,0,0,1,19,24.23706V24a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v.23706A8.54248,8.54248,0,0,1,7.76294,20H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H7.76294A8.54248,8.54248,0,0,1,12,8.76294V9a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V8.76294A8.54248,8.54248,0,0,1,23.23706,13H23a1,1,0,0,0-1,1v5A1,1,0,0,0,23,20Zm4-2H24V15h3Z"/>
</svg>
);

export const VectorPathCircle = createIcon(SVG, 'VectorPathCircle');
