
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chevron-last-down" d="M5.08575,13.12109a.49993.49993,0,0,1,0-.707l2.8285-2.82812a.49988.49988,0,0,1,.70709,0L16,16.96436l7.37866-7.37842a.49988.49988,0,0,1,.70709,0l2.8285,2.82812a.49993.49993,0,0,1,0,.707L16.70709,23.32849a1,1,0,0,1-1.41418,0ZM26,24H6a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V25A1,1,0,0,0,26,24Z"/>
</svg>
);

export const ChevronLastDown = createIcon(SVG, 'ChevronLastDown');
