
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tractor" d="M28,20v7a1,1,0,0,1-1,1H24a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h3A1,1,0,0,1,28,20ZM8,19H5a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V20A1,1,0,0,0,8,19Zm16-2a3.00328,3.00328,0,0,0-3,3v3a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V20a3.00328,3.00328,0,0,0-3-3H5V15a2,2,0,0,1,2-2H9.2L9.804,6.96045A.98615.98615,0,0,1,9,6V5a1,1,0,0,1,1-1H22a1,1,0,0,1,1,1V6a.98615.98615,0,0,1-.804.96045L22.8,13H25a2,2,0,0,1,2,2v2Zm-9,1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Zm4,0a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5Zm1.6828-6.57349-.40234-4.02588A1.00015,1.00015,0,0,0,19.2854,7H12.7146a1.00015,1.00015,0,0,0-.99506.90063l-.40234,4.02588A1.99464,1.99464,0,0,1,13,11h6A1.99464,1.99464,0,0,1,20.6828,11.92651Z"/>
</svg>
);

export const Tractor = createIcon(SVG, 'Tractor');
