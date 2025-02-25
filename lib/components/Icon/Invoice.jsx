
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="invoice" d="M9,9.5v-1A.5.5,0,0,1,9.5,8h5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,9,9.5Zm0,4v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,9,13.5Zm0,4v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,9,17.5Zm0,4v-1a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,9,21.5Zm8-5a2.5035,2.5035,0,0,1,2-2.44946V13.5a1,1,0,0,1,2,0V14a1,1,0,0,1,0,2H19.5a.5.5,0,0,0,0,1H20a2.49821,2.49821,0,0,1,1,4.78833V22.5a1,1,0,0,1-2,0V22h-.5a1,1,0,0,1,0-2H20a.5.5,0,0,0,0-1h-.5A2.50231,2.50231,0,0,1,17,16.5ZM25,28H7a2.0026,2.0026,0,0,1-2-2V6A2.0026,2.0026,0,0,1,7,4H25a2.0026,2.0026,0,0,1,2,2V26A2.0026,2.0026,0,0,1,25,28ZM7,6V26H25.002L25,6Z"/>
</svg>
);

export const Invoice = createIcon(SVG, 'Invoice');
