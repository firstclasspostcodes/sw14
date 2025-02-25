
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="files-queue" d="M10,10V8a1,1,0,0,1,1-1h5v5.17163l-1.58594-1.58594A2,2,0,0,0,12.99994,10Zm14.41418.58545A2.00041,2.00041,0,0,1,25,11.99976V19h2a1,1,0,0,0,1-1V9H22.82849ZM23.5,7H28L23,2V6.5A.5.5,0,0,0,23.5,7ZM19.41406,5.58569,21,7.17163V2H16a1,1,0,0,0-1,1V5h2.99994A2,2,0,0,1,19.41406,5.58569ZM18,11.5a.5.5,0,0,0,.5.5H23L18,7Zm1.41418,4.08545A2.00041,2.00041,0,0,1,20,16.99976V24h2a1,1,0,0,0,1-1V14H17.82849ZM18,17l-5-5v4.5a.5.5,0,0,0,.5.5ZM6,12h5v6a1,1,0,0,0,1,1h6v9a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13A1,1,0,0,1,6,12Z"/>
</svg>
);

export const FilesQueue = createIcon(SVG, 'FilesQueue');
