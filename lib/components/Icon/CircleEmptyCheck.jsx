
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-check" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm6.05774-12.70874a.5.5,0,0,1,.03088.67883l-6.81109,8.05823a1,1,0,0,1-1.50623.02429L9.88147,16.741a.5.5,0,0,1,.00616-.67658l1.137-1.21508a.5.5,0,0,1,.63354-.0802l2.611,1.66156,6.03095-5.22522a.5.5,0,0,1,.6784.02178Z"/>
</svg>
);

export const CircleEmptyCheck = createIcon(SVG, 'CircleEmptyCheck');
