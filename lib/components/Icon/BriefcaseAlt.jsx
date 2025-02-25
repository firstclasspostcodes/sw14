
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="briefcase-alt" d="M28,10v4a2.00229,2.00229,0,0,1-2,2H18V14.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V16H6a2.00229,2.00229,0,0,1-2-2V10A2.00229,2.00229,0,0,1,6,8H26A2.00229,2.00229,0,0,1,28,10ZM5,24a2.00006,2.00006,0,0,0,2,2H25a2.00006,2.00006,0,0,0,2-2V18H5ZM14,5h4a1.001,1.001,0,0,1,1,1h2a3.00328,3.00328,0,0,0-3-3H14a3.00328,3.00328,0,0,0-3,3h2A1.001,1.001,0,0,1,14,5Z"/>
</svg>
);

export const BriefcaseAlt = createIcon(SVG, 'BriefcaseAlt');
