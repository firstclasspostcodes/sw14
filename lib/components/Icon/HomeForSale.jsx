
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="home-for-sale" d="M28,9v1a1,1,0,0,1-1,1H24v2H22V11H17v2H15V11H10V28H7V11H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H7V5A1,1,0,0,1,8,4H9a1,1,0,0,1,1,1V8H27A1,1,0,0,1,28,9Zm-2,6.5v10a.5.5,0,0,1-.5.5h-11a.5.5,0,0,1-.5-.5v-10a.5.5,0,0,1,.5-.5h11A.5.5,0,0,1,26,15.5Zm-2.39777,5.07251-3.4262-3.398a.24993.24993,0,0,0-.35206,0l-3.4262,3.398a.25.25,0,0,0,.176.42749H17v2.75a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25V21h.42621A.25.25,0,0,0,23.60223,20.57251Z"/>
</svg>
);

export const HomeForSale = createIcon(SVG, 'HomeForSale');
