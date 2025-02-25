
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-info" d="M18.903,9.58221l-.33331,2A.5.5,0,0,1,18.07642,12H15.59021a.5.5,0,0,1-.49316-.58221l.33331-2A.5.5,0,0,1,15.92358,9h2.48621A.5.5,0,0,1,18.903,9.58221ZM28,16A12,12,0,1,1,16,4,12.01343,12.01343,0,0,1,28,16Zm-3,0a9,9,0,1,0-9,9A9.01016,9.01016,0,0,0,25,16Zm-8-3H13.89038a.49993.49993,0,0,0-.48505.37872l-.25,1A.5.5,0,0,0,13.64038,15H14.4l-1.82525,6.08435A1.40763,1.40763,0,0,0,14,23h3.60962a.49993.49993,0,0,0,.48505-.37872l.25-1A.5.5,0,0,0,17.85962,21H16.6l1.82525-6.08435A1.40763,1.40763,0,0,0,17,13Z"/>
</svg>
);

export const CircleEmptyInfo = createIcon(SVG, 'CircleEmptyInfo');
