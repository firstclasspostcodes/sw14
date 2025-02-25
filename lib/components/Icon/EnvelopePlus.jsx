
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="envelope-plus" d="M4,22.17188V9.82812L10.17169,16ZM15.40015,18h1.17169a1.15255,1.15255,0,0,0,.70709-.293l4.76367-4.76367A8.00667,8.00667,0,0,1,18.06946,7H3.986l10.707,10.707A1.15257,1.15257,0,0,0,15.40015,18Zm3.00012,1.41418A2.3055,2.3055,0,0,1,16.986,20H14.986a2.30474,2.30474,0,0,1-1.41424-.58594l-1.99988-2L3.986,25h24l-7.58581-7.58594Zm5.67248-5.65881L21.82825,16,28,22.17188V13.73669a7.72074,7.72074,0,0,1-3.92725.01868ZM32,6a6,6,0,1,1-6-6A6,6,0,0,1,32,6Zm-3-.5a.5.5,0,0,0-.5-.5H27V3.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V5H23.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H25V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V7h1.5a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const EnvelopePlus = createIcon(SVG, 'EnvelopePlus');
