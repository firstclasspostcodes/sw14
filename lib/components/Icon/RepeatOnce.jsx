
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="repeat-once" d="M29,13.2569V21.5A3.50424,3.50424,0,0,1,25.5,25H6.5A3.50424,3.50424,0,0,1,3,21.5v-9A3.50424,3.50424,0,0,1,6.5,9h15V6.95428a.5.5,0,0,1,.78461-.41107l5.12158,3.54572a.5.5,0,0,1,0,.82214l-5.12158,3.54572A.5.5,0,0,1,21.5,14.04572V12H6.5a.50641.50641,0,0,0-.5.5v9a.50641.50641,0,0,0,.5.5h19a.50641.50641,0,0,0,.5-.5V14.90344a1,1,0,0,1,.43079-.82214l1.7846-1.23554A.5.5,0,0,1,29,13.2569Z"/>
</svg>
);

export const RepeatOnce = createIcon(SVG, 'RepeatOnce');
