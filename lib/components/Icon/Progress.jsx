
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="progress" d="M27,5H5A.99943.99943,0,0,0,4,6v4a.99943.99943,0,0,0,1,1H27a.99943.99943,0,0,0,1-1V6A.99943.99943,0,0,0,27,5ZM26,9H19V7h7Zm1,4H5a.99943.99943,0,0,0-1,1v4a.99943.99943,0,0,0,1,1H27a.99943.99943,0,0,0,1-1V14A.99943.99943,0,0,0,27,13Zm-1,4H15V15H26Zm1,4H5a.99943.99943,0,0,0-1,1v4a.99943.99943,0,0,0,1,1H27a.99943.99943,0,0,0,1-1V22A.99943.99943,0,0,0,27,21Zm-1,4H23V23h3Z"/>
</svg>
);

export const Progress = createIcon(SVG, 'Progress');
