
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="voicemail" d="M23,10a5.98922,5.98922,0,0,0-5.18823,9H14.18823A5.995,5.995,0,1,0,9,22H23a6,6,0,0,0,0-12ZM9,19a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,9,19Zm14,0a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,23,19Z"/>
</svg>
);

export const Voicemail = createIcon(SVG, 'Voicemail');
