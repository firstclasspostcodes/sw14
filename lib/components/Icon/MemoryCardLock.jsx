
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="memory-card-lock" d="M22,14a3.00328,3.00328,0,0,1-3-3H17V6h2V5a2.97586,2.97586,0,0,1,.17633-1H11.5A1.5,1.5,0,0,0,10,5.5v6L6.5999,14.05054A1.5,1.5,0,0,0,6,15.25046V26.5A1.5,1.5,0,0,0,7.5,28H25a1,1,0,0,0,1-1V14Zm-7-3H13V6h2ZM31,4H30V2a2.0026,2.0026,0,0,0-2-2H25a2.0026,2.0026,0,0,0-2,2V4H22a1.003,1.003,0,0,0-1,1v6a1.003,1.003,0,0,0,1,1h9a1.003,1.003,0,0,0,1-1V5A1.003,1.003,0,0,0,31,4ZM25,2.25A.25.25,0,0,1,25.25,2h2.5a.25.25,0,0,1,.25.25V4H25Z"/>
</svg>
);

export const MemoryCardLock = createIcon(SVG, 'MemoryCardLock');
