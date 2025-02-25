
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="video-play" d="M24.5,6H7.5A3.50424,3.50424,0,0,0,4,9.5v13A3.50424,3.50424,0,0,0,7.5,26h17A3.50424,3.50424,0,0,0,28,22.5V9.5A3.50424,3.50424,0,0,0,24.5,6ZM20.16022,16.82172l-5.66541,3.226A1,1,0,0,1,13,19.17865V12.72681a1,1,0,0,1,1.49481-.869l5.66541,3.226A1,1,0,0,1,20.16022,16.82172Z"/>
</svg>
);

export const VideoPlay = createIcon(SVG, 'VideoPlay');
