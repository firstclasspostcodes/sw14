
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="keyboard" d="M29,10H19V9a1,1,0,0,0-1-1H17V4H15V8H14a1,1,0,0,0-1,1v1H3a1,1,0,0,0-1,1V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V11A1,1,0,0,0,29,10Zm-8,3.25a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25ZM19.25,17h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5A.25.25,0,0,1,19.25,17ZM17,17.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5A.25.25,0,0,1,17,17.25Zm0-4a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25Zm-4,0a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25ZM11.25,17h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5A.25.25,0,0,1,11.25,17ZM9,13.25A.25.25,0,0,1,9.25,13h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25H9.25A.25.25,0,0,1,9,14.75Zm-4,0A.25.25,0,0,1,5.25,13h1.5a.25.25,0,0,1,.25.25v1.5a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,14.75ZM8.75,19H5.25A.25.25,0,0,1,5,18.75v-1.5A.25.25,0,0,1,5.25,17h3.5a.25.25,0,0,1,.25.25v1.5A.25.25,0,0,1,8.75,19ZM23,22.75a.25.25,0,0,1-.25.25H9.25A.25.25,0,0,1,9,22.75v-1.5A.25.25,0,0,1,9.25,21h13.5a.25.25,0,0,1,.25.25Zm4-4a.25.25,0,0,1-.25.25h-3.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25Zm0-4a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25Z"/>
</svg>
);

export const Keyboard = createIcon(SVG, 'Keyboard');
