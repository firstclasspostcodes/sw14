
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vases" d="M12,24v1.75l1.35114.50665A1,1,0,0,1,14,27.193V28H5v-.807a1,1,0,0,1,.64886-.93634L7,25.75V24c0-4-3-6-3-10S7,9,7,7V6H6.5A.5.5,0,0,1,6,5.5v-1A.5.5,0,0,1,6.5,4h6a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5H12V7c0,2,3,3,3,7S12,20,12,24Zm14.35114,2.25665L25.317,25.8689A4.31173,4.31173,0,0,0,28,22c0-2-3-4-3-6V15h.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h-7a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H19v1c0,2-3,4-3,6a4.31173,4.31173,0,0,0,2.683,3.8689l-1.03412.38775A1,1,0,0,0,17,27.193V28H27v-.807A1,1,0,0,0,26.35114,26.25665Z"/>
</svg>
);

export const Vases = createIcon(SVG, 'Vases');
