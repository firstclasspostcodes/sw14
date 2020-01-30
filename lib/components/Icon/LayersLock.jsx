
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="layers-lock" d="M4,10a1.50082,1.50082,0,0,1,.80371-1.3291l10.5-5.5a1.50007,1.50007,0,0,1,1.39258,0l2.36853,1.24072A2.97688,2.97688,0,0,0,19,5v6a3.00328,3.00328,0,0,0,3,3h.09729l-5.401,2.8291a1.50388,1.50388,0,0,1-1.39258,0l-10.5-5.5A1.50082,1.50082,0,0,1,4,10ZM27.19629,20.6709l-.71167-.3728-3.23309,1.6936.016.0083L16.464,25.56348a.99926.99926,0,0,1-.928,0L8.73242,22l.01581-.0083L5.51532,20.2981l-.71161.3728a1.50083,1.50083,0,0,0,0,2.6582l10.5,5.5a1.50388,1.50388,0,0,0,1.39258,0l10.5-5.5a1.50083,1.50083,0,0,0,0-2.6582Zm0-6-.71167-.3728-3.23309,1.6936.016.0083L16.464,19.56348a.99926.99926,0,0,1-.928,0L8.73242,16l.01581-.0083L5.51532,14.2981l-.71161.3728a1.50083,1.50083,0,0,0,0,2.6582l10.5,5.5a1.50388,1.50388,0,0,0,1.39258,0l10.5-5.5a1.50083,1.50083,0,0,0,0-2.6582ZM32,5v6a1.003,1.003,0,0,1-1,1H22a1.003,1.003,0,0,1-1-1V5a1.003,1.003,0,0,1,1-1h1V2a2.0026,2.0026,0,0,1,2-2h3a2.0026,2.0026,0,0,1,2,2V4h1A1.003,1.003,0,0,1,32,5ZM25,4h3V2.25A.25.25,0,0,0,27.75,2h-2.5a.25.25,0,0,0-.25.25Z"/>
</svg>
);

export const LayersLock = createIcon(SVG, 'LayersLock');
