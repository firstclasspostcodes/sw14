
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder-open" d="M6.05975,11.51489,4,19.75391V7A2.00006,2.00006,0,0,1,6,5h4.17157a1.99993,1.99993,0,0,1,1.41425.58582L13,7H26a2.00006,2.00006,0,0,1,2,2v1H8A1.9999,1.9999,0,0,0,6.05975,11.51489ZM29.43848,12H9.56152a1.99988,1.99988,0,0,0-1.94024,1.51489L4,28H28l3.37872-13.51489A2,2,0,0,0,29.43848,12Z"/>
</svg>
);

export const FolderOpen = createIcon(SVG, 'FolderOpen');
