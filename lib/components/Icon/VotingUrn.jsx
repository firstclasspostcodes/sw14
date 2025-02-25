
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="voting-urn" d="M27,9v5H5V9A1,1,0,0,1,6,8h4.22192l2.00031,2H11.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H18.82812l2-2H26A1,1,0,0,1,27,9ZM7,27a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16H7Zm9-17,4.47485-4.47485L16.5,1.55029,11.55023,6.5,15.05029,10Z"/>
</svg>
);

export const VotingUrn = createIcon(SVG, 'VotingUrn');
