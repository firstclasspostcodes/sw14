
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="video-play-empty" d="M20.16022,16.82172l-5.66541,3.226A1,1,0,0,1,13,19.17865V12.72681a1,1,0,0,1,1.49481-.869l5.66541,3.226A1,1,0,0,1,20.16022,16.82172ZM28,9.5v13A3.50424,3.50424,0,0,1,24.5,26H7.5A3.50424,3.50424,0,0,1,4,22.5V9.5A3.50424,3.50424,0,0,1,7.5,6h17A3.50424,3.50424,0,0,1,28,9.5Zm-3,0a.50065.50065,0,0,0-.5-.5H7.5a.50065.50065,0,0,0-.5.5v13a.50065.50065,0,0,0,.5.5h17a.50065.50065,0,0,0,.5-.5Z"/>
</svg>
);

export const VideoPlayEmpty = createIcon(SVG, 'VideoPlayEmpty');
