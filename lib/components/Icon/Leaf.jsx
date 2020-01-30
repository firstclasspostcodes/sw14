
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="leaf" d="M28.001,5.01685c-.04267,4.67126-.91516,23.44177-17.27185,17.73046a15.29413,15.29413,0,0,0-4.02411,4.30347l-.2627.42554a.99979.99979,0,0,1-1.3761.32556l-.851-.52551a1,1,0,0,1-.32562-1.37622l.26269-.42554c.33735-.54639,3.43781-5.667,12.11133-10.11865A31.28748,31.28748,0,0,0,24.915,9.23a.9999.9999,0,1,0-1.418-1.41016,30.96251,30.96251,0,0,1-8.18359,5.77637,39.099,39.099,0,0,0-7.36066,4.8042.49932.49932,0,0,1-.82672-.31494C5.96741,4.89612,22.60571,4.04346,27.00336,4.0127A.99018.99018,0,0,1,28.001,5.01685Z"/>
</svg>
);

export const Leaf = createIcon(SVG, 'Leaf');
