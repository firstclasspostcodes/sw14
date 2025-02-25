
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="paste" d="M15,16H8.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h7.27856A2.97764,2.97764,0,0,0,15,16Zm0,2H8.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15ZM8,22.5v1a.5.5,0,0,0,.5.5H15V22H8.5A.5.5,0,0,0,8,22.5ZM17,10h2l.00037,3H21V10a2.0026,2.0026,0,0,0-2-2H17V7a1,1,0,0,0-1-1H15a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2H9A1,1,0,0,0,8,7V8H6a2.0026,2.0026,0,0,0-2,2V26a2.0026,2.0026,0,0,0,2,2h9.18372A2.97194,2.97194,0,0,1,15,27V26H6V10H8v1a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1Zm7.5,9H28l-4-4v3.5A.5.5,0,0,0,24.5,19ZM22,20V15H18a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V21H23A1,1,0,0,1,22,20Z"/>
</svg>
);

export const Paste = createIcon(SVG, 'Paste');
