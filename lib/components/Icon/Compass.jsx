
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="compass" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm3.75946-14.02441-6.11352,2.03784a.99989.99989,0,0,0-.63245.63257l-2.0379,6.11352c-.34784,1.04346.22137,1.61279,1.26495,1.26489l6.11352-2.03784a.99989.99989,0,0,0,.63245-.63257l2.0379-6.11352C21.37225,11.197,20.803,10.62769,19.75946,10.97559Zm-2.69879,6.08508a1.5,1.5,0,1,1,0-2.12134A1.5,1.5,0,0,1,17.06067,17.06067Z"/>
</svg>
);

export const Compass = createIcon(SVG, 'Compass');
