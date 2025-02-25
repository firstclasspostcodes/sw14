
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="robot" d="M13,23a1,1,0,0,1-1-1V13h8v9a1,1,0,0,1-1,1ZM24,13H22v7a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V14A1,1,0,0,0,24,13ZM7,14v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V13H8A1,1,0,0,0,7,14Zm7,11H12a1,1,0,0,0-1,1v2h4V26A1,1,0,0,0,14,25Zm6,0H18a1,1,0,0,0-1,1v2h4V26A1,1,0,0,0,20,25Zm2-15a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1ZM15,7a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1Zm5,0a1,1,0,0,0-1-1H18a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1Z"/>
</svg>
);

export const Robot = createIcon(SVG, 'Robot');
