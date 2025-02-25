
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="motorbike" d="M18,20v7a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2A1,1,0,0,1,18,20Zm5-8v9a3.99066,3.99066,0,0,1-3,3.85858V20a3.00328,3.00328,0,0,0-3-3H15a3.00328,3.00328,0,0,0-3,3v4.85858A3.99066,3.99066,0,0,1,9,21V12a3,3,0,0,1,3-3h8A3,3,0,0,1,23,12Zm-5-.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5Zm6.55469-6.332-3-2a.9994.9994,0,0,0-1.26172.125L18.58594,5H13.41406L11.707,3.293a.9989.9989,0,0,0-1.26172-.125l-3,2A1,1,0,1,0,8.55469,6.832L10.873,5.28662,12.293,6.707A.99928.99928,0,0,0,13,7h6a.99928.99928,0,0,0,.707-.293L21.127,5.28662,23.44531,6.832A1,1,0,1,0,24.55469,5.168Z"/>
</svg>
);

export const Motorbike = createIcon(SVG, 'Motorbike');
