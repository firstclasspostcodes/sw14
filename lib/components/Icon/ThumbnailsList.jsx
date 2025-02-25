
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="thumbnails-list" d="M11,14v4a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h4A1,1,0,0,1,11,14Zm-1,7H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V22A1,1,0,0,0,10,21ZM10,5H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5Zm17,6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H14a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Zm0,18H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Zm0-6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Z"/>
</svg>
);

export const ThumbnailsList = createIcon(SVG, 'ThumbnailsList');
