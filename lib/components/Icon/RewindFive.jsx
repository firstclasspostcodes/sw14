
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="rewind-five" d="M16,20H14a1,1,0,0,1,0-2h2a.5.5,0,0,0,0-1H14a.99943.99943,0,0,1-1-1V13a.99943.99943,0,0,1,1-1h3a1,1,0,0,1,0,2H15v1h1a2.5,2.5,0,0,1,0,5ZM16,4V1.95435a.5.5,0,0,0-.78463-.41112L11,4.46143V1.95431a.5.5,0,0,0-.78461-.4111L5.09381,5.08887a.5.5,0,0,0,0,.82226l5.12158,3.54566A.5.5,0,0,0,11,9.04569V6.53857l4.21537,2.9182A.5.5,0,0,0,16,9.04565V7a9.00946,9.00946,0,0,1,8.99631,9.26014,9.10054,9.10054,0,0,1-8.73617,8.73617A8.9938,8.9938,0,0,1,7.92145,12.0409a.49475.49475,0,0,0-.156-.63153L6.11229,10.26489a.50213.50213,0,0,0-.728.1691,11.90221,11.90221,0,0,0-1.266,7.25536A12.00059,12.00059,0,1,0,16,4Z"/>
</svg>
);

export const RewindFive = createIcon(SVG, 'RewindFive');
