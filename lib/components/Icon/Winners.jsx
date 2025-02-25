
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="winners" d="M13.58447,7.64453A2.40258,2.40258,0,0,1,13,6.21387V4.54541A.52421.52421,0,0,1,13.5,4h5a.52421.52421,0,0,1,.5.54541V6.21387a2.40258,2.40258,0,0,1-.58447,1.43066L17,10v1h.5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H15V10ZM27,19H22v4a1,1,0,0,1-2,0V15a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v8a1,1,0,0,1-2,0V17H5a1,1,0,0,0-1,1V28H28V20A1,1,0,0,0,27,19Z"/>
</svg>
);

export const Winners = createIcon(SVG, 'Winners');
