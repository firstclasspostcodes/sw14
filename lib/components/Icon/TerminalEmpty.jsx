
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="terminal-empty" d="M21,14.5v1a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,21,14.5Zm-6-3.53857a.49989.49989,0,0,0-.31433-.46412l-5-2A.5.5,0,0,0,9,8.96167v1.07666a.5.5,0,0,0,.31433.46436L11.80762,11.5l-2.49329.99731A.49989.49989,0,0,0,9,12.96143v1.0769a.49982.49982,0,0,0,.68567.46411l5-1.99975A.5.5,0,0,0,15,12.03833ZM28,7.5v17A3.50424,3.50424,0,0,1,24.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5V7.5A3.50424,3.50424,0,0,1,7.5,4h17A3.50424,3.50424,0,0,1,28,7.5Zm-3,0a.50609.50609,0,0,0-.5-.5H7.5a.50609.50609,0,0,0-.5.5v17a.50609.50609,0,0,0,.5.5h17a.50609.50609,0,0,0,.5-.5Z"/>
</svg>
);

export const TerminalEmpty = createIcon(SVG, 'TerminalEmpty');
