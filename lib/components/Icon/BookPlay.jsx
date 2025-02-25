
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="book-play" d="M10,23H26V5a1,1,0,0,0-1-1H10A4,4,0,0,0,6,8V24a4,4,0,0,0,4,4H25a1,1,0,0,0,1-1V25H10a1,1,0,0,1,0-2Zm3-12.61554a.40347.40347,0,0,1,.58386-.3609l7.23114,3.6156a.40342.40342,0,0,1,0,.72168l-7.23114,3.6156A.40347.40347,0,0,1,13,17.61554Z"/>
</svg>
);

export const BookPlay = createIcon(SVG, 'BookPlay');
