
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="envelope-empty" d="M11.986,15l-8-8L14.58167.294A2.27987,2.27987,0,0,1,16,0a2.06186,2.06186,0,0,1,1.39038.294L27.986,7l-8,8Zm0,2-8,8h24l-8-8Zm9.84223-1L28,22.17188V9.82812ZM10.17169,16,4,9.82812V22.17188Z"/>
</svg>
);

export const EnvelopeEmpty = createIcon(SVG, 'EnvelopeEmpty');
