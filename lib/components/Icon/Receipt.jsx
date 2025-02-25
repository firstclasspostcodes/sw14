
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="receipt" d="M11,9.5v-1a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,11,9.5ZM14.5,20h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,20Zm-3-6h9a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,11.5,14ZM21,16.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5ZM24,28a.99945.99945,0,0,1-.55469-.168l-2.3916-1.59473L19.125,27.78125a1.004,1.004,0,0,1-1.25,0L16,26.28027l-1.875,1.501a1.004,1.004,0,0,1-1.25,0L10.94629,26.2373,8.55469,27.832A.99992.99992,0,0,1,7,27V6A2.0026,2.0026,0,0,1,9,4H23a2.0026,2.0026,0,0,1,2,2V27a.99982.99982,0,0,1-1,1Zm-8-4a1.00285,1.00285,0,0,1,.625.21875l1.875,1.501,1.875-1.501a1.00037,1.00037,0,0,1,1.17969-.05078L23,25.13184V6H9V25.13184l1.44531-.96387a1.00037,1.00037,0,0,1,1.17969.05078l1.875,1.501,1.875-1.501A1.00285,1.00285,0,0,1,16,24Z"/>
</svg>
);

export const Receipt = createIcon(SVG, 'Receipt');
