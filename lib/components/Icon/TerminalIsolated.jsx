
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="terminal-isolated" d="M28,22.5v2a.5.5,0,0,1-.5.5h-11a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h11A.5.5,0,0,1,28,22.5ZM16,12.14478a.49981.49981,0,0,0-.28387-.45081l-11-5.27356A.50006.50006,0,0,0,4,6.87134V9.08948a.49977.49977,0,0,0,.28387.4508L11.501,13,4.28387,16.45972A.49977.49977,0,0,0,4,16.91052v2.21814a.50006.50006,0,0,0,.71613.45093l11-5.27356A.49981.49981,0,0,0,16,13.85522Z"/>
</svg>
);

export const TerminalIsolated = createIcon(SVG, 'TerminalIsolated');
