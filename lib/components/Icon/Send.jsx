
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="send" d="M27.863,6.91364l-2.76691,18.4458a.5.5,0,0,1-.69141.38537L16.6,22.4l-3.74646,3.74646A.5.5,0,0,1,12,25.79291V20.83765l8.63281-7.06324a1.00008,1.00008,0,1,0-1.26562-1.54882l-9.11194,7.4552L5.03656,17.44421a.5.5,0,0,1-.01141-.91412l22.135-10.1452A.5.5,0,0,1,27.863,6.91364Z"/>
</svg>
);

export const Send = createIcon(SVG, 'Send');
