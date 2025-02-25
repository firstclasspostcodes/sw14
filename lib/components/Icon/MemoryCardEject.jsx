
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="memory-card-eject" d="M23.5,12A2.5,2.5,0,0,1,21,9.5V5.28174A1.77758,1.77758,0,0,1,21.55054,4H11.5A1.5,1.5,0,0,0,10,5.5v6L6.5999,14.05054A1.5,1.5,0,0,0,6,15.25046V26.5A1.5,1.5,0,0,0,7.5,28h17A1.5,1.5,0,0,0,26,26.5V12ZM15,11H13V6h2Zm4,0H17V6h2Zm11.5-1h-7a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,30.5,10Zm.33186-4.81662L27.387.973a.5.5,0,0,0-.774,0L23.16815,5.18338A.5.5,0,0,0,23.55512,6h6.88976A.5.5,0,0,0,30.83186,5.18338Z"/>
</svg>
);

export const MemoryCardEject = createIcon(SVG, 'MemoryCardEject');
