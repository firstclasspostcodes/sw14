
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder-minus" d="M19.08246,10H4V7A2.00006,2.00006,0,0,1,6,5h4.17157a1.99993,1.99993,0,0,1,1.41425.58582L13,7h5.06946A7.93128,7.93128,0,0,0,19.08246,10Zm1.6438,2H4V26a2.00006,2.00006,0,0,0,2,2H26a2.00006,2.00006,0,0,0,2-2V13.73669A7.89492,7.89492,0,0,1,20.72626,12ZM32,6a6,6,0,1,1-6-6A6,6,0,0,1,32,6Zm-3-.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const FolderMinus = createIcon(SVG, 'FolderMinus');
