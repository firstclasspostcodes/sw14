
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mc" d="M21.38184,22l1.5,3H9.11816l1.5-3Zm.32519-8.707a.999.999,0,1,1,0,.00049Zm-10,0a.999.999,0,1,1,0,.00049ZM29,8V24a.99974.99974,0,0,1-1,1H25.11816l-2.22363-4.44727A1.0004,1.0004,0,0,0,22,20H10a1.0004,1.0004,0,0,0-.89453.55273L6.88184,25H4a.99974.99974,0,0,1-1-1V8A.99974.99974,0,0,1,4,7H28A.99974.99974,0,0,1,29,8ZM14,14a3,3,0,1,0-3,3A3,3,0,0,0,14,14Zm10,0a3,3,0,1,0-3,3A3,3,0,0,0,24,14Z"/>
</svg>
);

export const Mc = createIcon(SVG, 'Mc');
