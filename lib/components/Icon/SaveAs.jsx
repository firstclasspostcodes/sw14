
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="save-as" d="M9.62946,11.58124A1,1,0,0,1,10.44318,10H13V4a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6h2.55682a1,1,0,0,1,.81372,1.58124l-5.55682,7.77954a1,1,0,0,1-1.62744,0ZM28,23v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1H27A1,1,0,0,1,28,23ZM13,24.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Zm4,0a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Zm4,0a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const SaveAs = createIcon(SVG, 'SaveAs');
