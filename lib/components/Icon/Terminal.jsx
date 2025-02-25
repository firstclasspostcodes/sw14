
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="terminal" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4Zm-9.81433,8.50269-5,1.99975A.49982.49982,0,0,1,9,14.03833v-1.0769a.49989.49989,0,0,1,.31433-.46412L11.80762,11.5l-2.49329-.99731A.5.5,0,0,1,9,10.03833V8.96167a.5.5,0,0,1,.68567-.46436l5,2A.49989.49989,0,0,1,15,10.96143v1.0769A.5.5,0,0,1,14.68567,12.50269ZM21,15.5a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const Terminal = createIcon(SVG, 'Terminal');
