
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="skull" d="M16,3.35c-7,0-10,4.35-10,11a4.31293,4.31293,0,0,0,1.6861,3.45257L7.85858,19.01A1.191,1.191,0,0,0,9,20h1a1.77674,1.77674,0,0,1,1.4472.89441l1.1056,2.21112A1.7768,1.7768,0,0,0,14,24h4a1.7768,1.7768,0,0,0,1.4472-.89447l1.1056-2.21112A1.77674,1.77674,0,0,1,22,20h1a1.191,1.191,0,0,0,1.14142-.99l.17248-1.20746A4.31293,4.31293,0,0,0,26,14.35C26,8,23,3.35,16,3.35ZM12.84851,18.15143a1.343,1.343,0,0,1-1.77039.08032l-1.15624-.96356a1.76528,1.76528,0,0,1-.4762-1.88239l.10864-.27166A1.91774,1.91774,0,0,1,11.2,14h1.6a2.06227,2.06227,0,0,1,1.7,1,1.72362,1.72362,0,0,1-.34851,1.84851Zm4.25708,3.40137-.21118-.1056a2.26044,2.26044,0,0,0-1.78882,0l-.21118.1056c-.49194.246-.69318.04467-.44721-.44727l1.1056-2.21112c.246-.49194.64843-.49194.8944,0l1.1056,2.21112C17.79877,21.59747,17.59753,21.79877,17.10559,21.5528Zm4.97253-4.28461-1.15624.96356a1.343,1.343,0,0,1-1.77039-.08032l-1.303-1.30292A1.72362,1.72362,0,0,1,17.5,15a2.06227,2.06227,0,0,1,1.7-1h1.6a1.91774,1.91774,0,0,1,1.64569,1.11414l.10864.27166A1.76528,1.76528,0,0,1,22.07812,17.26819Zm1.06006,6.45538-1.03259,3.06525A4,4,0,0,1,18.52789,29H13.47211a4,4,0,0,1-3.5777-2.21118L8.86182,23.72357A.5.5,0,0,1,9.309,23h.4234a.5.5,0,0,1,.416.22266l1.55468,2.332a1,1,0,0,0,.832.44531h6.92968a1,1,0,0,0,.832-.44531l1.55468-2.332A.5.5,0,0,1,22.26758,23h.4234A.5.5,0,0,1,23.13818,23.72357Z"/>
</svg>
);

export const Skull = createIcon(SVG, 'Skull');
