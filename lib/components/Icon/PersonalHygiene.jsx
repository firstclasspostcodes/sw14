
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="personal-hygiene" d="M26,6v4.88452a6.50446,6.50446,0,0,1-.19434,1.57617l-2.71,9.84058A3.45235,3.45235,0,0,0,23,23.11548V27a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1V23.11548a6.50446,6.50446,0,0,1,.19434-1.57617l2.71-9.84058A3.42543,3.42543,0,0,0,22.99316,11H21a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3A2,2,0,0,1,26,6ZM9.90533,27.62128A.5.5,0,0,0,10.39038,28h2.21924a.5.5,0,0,0,.48505-.37872L13.75,25H9.25ZM16,4H7A1,1,0,0,0,6,5V7l.95752,13.40533A3.00072,3.00072,0,0,0,7.2666,21.5332L8,23h7l.7334-1.4668a3.00072,3.00072,0,0,0,.30908-1.12787L17,7V5A1,1,0,0,0,16,4Z"/>
</svg>
);

export const PersonalHygiene = createIcon(SVG, 'PersonalHygiene');
