
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="inbox" d="M25.5,5H6.5A2.50263,2.50263,0,0,0,4,7.5v18A2.50263,2.50263,0,0,0,6.5,28h19A2.50263,2.50263,0,0,0,28,25.5V7.5A2.50263,2.50263,0,0,0,25.5,5ZM25,18H20.90991a.5.5,0,0,0-.49029.40186l-.83924,4.19628A.5.5,0,0,1,19.09009,23H12.90991a.5.5,0,0,1-.49029-.40186l-.83924-4.19628A.5.5,0,0,0,11.09009,18H7V8H25Z"/>
</svg>
);

export const Inbox = createIcon(SVG, 'Inbox');
