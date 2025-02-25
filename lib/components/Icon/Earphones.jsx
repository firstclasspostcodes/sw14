
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="earphones" d="M15,9a5.99264,5.99264,0,0,1-3,5.19067V20H9V15A9.12633,9.12633,0,0,0,7.42047,9.45752a.8114.8114,0,0,0-1.30133.0376,1.41984,1.41984,0,0,0-.02362,1.56579,7.52669,7.52669,0,0,1,.89362,3.585A5.99705,5.99705,0,1,1,15,9ZM9,28h2V22H9Zm11,0h2V22H20ZM22,3a5.99652,5.99652,0,0,0-3,11.19067V20h3.125V15a9.12633,9.12633,0,0,1,1.57953-5.54248.81793.81793,0,0,1,1.29535.04224,1.45021,1.45021,0,0,1,.021,1.574,7.51778,7.51778,0,0,0-.88336,3.51733A5.991,5.991,0,0,0,22,3Z"/>
</svg>
);

export const Earphones = createIcon(SVG, 'Earphones');
