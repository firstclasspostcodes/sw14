
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="share" d="M28,24a4,4,0,0,1-8,0c0-.10529.023-.204.03094-.30725l-9.401-4.70056a4.00008,4.00008,0,1,1,0-5.98438l9.401-4.70056C20.023,8.204,20,8.10522,20,8a4.04034,4.04034,0,1,1,1.37006,2.99219l-9.401,4.70056c.008.10321.03094.202.03094.30725s-.02295.204-.03094.30725l9.401,4.70056A3.98214,3.98214,0,0,1,28,24Z"/>
</svg>
);

export const Share = createIcon(SVG, 'Share');
