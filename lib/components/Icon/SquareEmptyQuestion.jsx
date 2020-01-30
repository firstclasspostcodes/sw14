
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-question" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,24.5a.50641.50641,0,0,1-.5.5H7.5a.50641.50641,0,0,1-.5-.5V7.5A.50641.50641,0,0,1,7.5,7h17a.50641.50641,0,0,1,.5.5ZM18,20v2a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2A1,1,0,0,1,18,20Zm2.75-7v.11426c0,1.37921-.86694,2.08221-1.95569,2.82495a3.51819,3.51819,0,0,0-1.47369,1.721A.49151.49151,0,0,1,16.84937,18h-2.062a.50188.50188,0,0,1-.49414-.5802,3.26841,3.26841,0,0,1,.65955-1.60089,10.46962,10.46962,0,0,1,2.32751-1.85651,1.01612,1.01612,0,0,0,.46973-.84814V13a1.0013,1.0013,0,0,0-1-1h-1.5a1,1,0,0,0-1,1,1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1,4,4,0,0,1,4-4h1.5C19.03278,9,20.75,10.16394,20.75,13Z"/>
</svg>
);

export const SquareEmptyQuestion = createIcon(SVG, 'SquareEmptyQuestion');
