
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="ticket" d="M22.5,9H24V5a1,1,0,0,0-1-1H19.15027a3.48105,3.48105,0,0,1-6.30054,0H9A1,1,0,0,0,8,5V9H9.5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5H8V27a1,1,0,0,0,1,1h3.84973a3.48105,3.48105,0,0,1,6.30054,0H23a1,1,0,0,0,1-1V11H22.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,22.5,9ZM15,10.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Zm5,0a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const Ticket = createIcon(SVG, 'Ticket');
