
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tree-conifer" d="M24.52686,23H18v3l.63818,1.27637A.5.5,0,0,1,18.191,28H13.809a.5.5,0,0,1-.4472-.72363L14,26V23H7.47314a.50224.50224,0,0,1-.38391-.79126l4.17139-6.16113H9.62128a.50275.50275,0,0,1-.3736-.80591L13.80811,9h-.80695a.502.502,0,0,1-.38812-.78491l3.02783-4.6225a.45771.45771,0,0,1,.77624,0l3.0279,4.6225A.502.502,0,0,1,19.05682,9h-.86493l4.56043,6.2417a.50275.50275,0,0,1-.3736.80591H20.73938l4.17139,6.16113A.50224.50224,0,0,1,24.52686,23Z"/>
</svg>
);

export const TreeConifer = createIcon(SVG, 'TreeConifer');
