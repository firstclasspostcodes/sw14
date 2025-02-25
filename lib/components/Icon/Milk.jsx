
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="milk" d="M12,6V5a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H13A1,1,0,0,1,12,6Zm8.68243,8.69421-1.36486-2.38855A9.98478,9.98478,0,0,1,18.15527,9H12.84473a9.98478,9.98478,0,0,1-1.1623,3.30566l-1.36486,2.38855A10,10,0,0,0,9,19.65564V26a2.00006,2.00006,0,0,0,2,2h9a2.00006,2.00006,0,0,0,2-2V19.65564A10,10,0,0,0,20.68243,14.69421Z"/>
</svg>
);

export const Milk = createIcon(SVG, 'Milk');
