
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="palette-package" d="M6,20.5v-6a.5.5,0,0,1,.5-.5h8a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-.5.5h-8A.5.5,0,0,1,6,20.5Zm11-6v6a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5h-8A.5.5,0,0,0,17,14.5ZM12.5,12h7a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5h-7a.5.5,0,0,0-.5.5v6A.5.5,0,0,0,12.5,12Zm15,11H4.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V25h6v2.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V25h6v2.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,27.5,23Z"/>
</svg>
);

export const PalettePackage = createIcon(SVG, 'PalettePackage');
