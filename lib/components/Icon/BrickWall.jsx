
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="brick-wall" d="M28,5H4A.99943.99943,0,0,0,3,6V26a.99943.99943,0,0,0,1,1H28a.99943.99943,0,0,0,1-1V6A.99943.99943,0,0,0,28,5ZM13,7h6V9H13Zm6,10H13V15h6Zm4,2v2H17V19Zm-8,0v2H9V19ZM9,13V11h6v2Zm8,0V11h6v2ZM5,7h6V9H5Zm0,4H7v2H5Zm0,4h6v2H5Zm0,4H7v2H5Zm6,6H5V23h6Zm8,0H13V23h6Zm8,0H21V23h6Zm0-4H25V19h2Zm0-4H21V15h6Zm0-4H25V11h2Zm0-4H21V7h6Z"/>
</svg>
);

export const BrickWall = createIcon(SVG, 'BrickWall');
