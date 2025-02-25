
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-alert" d="M18,20v2a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2A1,1,0,0,1,18,20ZM17,9H15a1,1,0,0,0-1,1l-.00073,3,.91961,4.59808A.5.5,0,0,0,15.40918,18h1.18018a.5.5,0,0,0,.49029-.40192L17.99927,13,18,10A1,1,0,0,0,17,9ZM28,7.5v17A3.50424,3.50424,0,0,1,24.5,28H7.5A3.50424,3.50424,0,0,1,4,24.5V7.5A3.50424,3.50424,0,0,1,7.5,4h17A3.50424,3.50424,0,0,1,28,7.5Zm-3,0a.50641.50641,0,0,0-.5-.5H7.5a.50641.50641,0,0,0-.5.5v17a.50641.50641,0,0,0,.5.5h17a.50641.50641,0,0,0,.5-.5Z"/>
</svg>
);

export const SquareEmptyAlert = createIcon(SVG, 'SquareEmptyAlert');
