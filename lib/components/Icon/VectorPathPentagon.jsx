
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vector-path-pentagon" d="M29,11H24.23816L19,7.19043V4a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V7.37915L7.47375,11H3a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H5.08551l1.68231,5.04688A.98576.98576,0,0,0,6,24v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V28h6v1a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V24a.9857.9857,0,0,0-.76776-.95312L26.91461,18H29a1,1,0,0,0,1-1V12A1,1,0,0,0,29,11ZM7,16H4V13H7ZM14,5h3V8H14ZM11,28H8V25h3Zm8-4v1H13V24a1,1,0,0,0-1-1H9.91443L8.23224,17.95312A.9857.9857,0,0,0,9,17V13.62109L13.52594,10h4.236L23,13.80957V17a.98577.98577,0,0,0,.7677.95312L22.08557,23H20A1,1,0,0,0,19,24Zm5,4H21V25h3Zm4-12H25V13h3Z"/>
</svg>
);

export const VectorPathPentagon = createIcon(SVG, 'VectorPathPentagon');
