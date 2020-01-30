
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="subtitles" d="M24.5,5H6.5A3.50424,3.50424,0,0,0,3,8.5v12A3.50424,3.50424,0,0,0,6.5,24h5.4502l2.26367,3.77148a1.49953,1.49953,0,0,0,2.57226,0L19.0498,24H24.5A3.50424,3.50424,0,0,0,28,20.5V8.5A3.50424,3.50424,0,0,0,24.5,5ZM25,20.5a.501.501,0,0,1-.5.5H18.2002a1.49927,1.49927,0,0,0-1.28614.72852L15.5,24.085l-1.41406-2.35644A1.49927,1.49927,0,0,0,12.7998,21H6.5a.501.501,0,0,1-.5-.5V8.5A.501.501,0,0,1,6.5,8h18a.501.501,0,0,1,.5.5ZM17,17v1a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h1A1,1,0,0,1,17,17Zm-5,0v1a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h1A1,1,0,0,1,12,17Zm10,0v1a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h1A1,1,0,0,1,22,17Z"/>
</svg>
);

export const Subtitles = createIcon(SVG, 'Subtitles');
