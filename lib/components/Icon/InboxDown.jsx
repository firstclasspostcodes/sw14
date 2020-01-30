
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="inbox-down" d="M26,14a7.95668,7.95668,0,0,0,2-.26331V25.5A2.50263,2.50263,0,0,1,25.5,28H6.5A2.50263,2.50263,0,0,1,4,25.5V7.5A2.50263,2.50263,0,0,1,6.5,5H18.06946A8.00855,8.00855,0,0,0,18,6a7.95978,7.95978,0,0,0,.26331,2H7V18h4.09009a.5.5,0,0,1,.49029.40186l.83924,4.19628A.5.5,0,0,0,12.90991,23h6.18018a.5.5,0,0,0,.49029-.40186l.83924-4.19628A.5.5,0,0,1,20.90991,18H25V13.93054A8.02,8.02,0,0,0,26,14Zm6-8a6,6,0,1,1-6-6A6,6,0,0,1,32,6ZM28.14789,6H27V3.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V6H23.85211a.5.5,0,0,0-.37787.82739l2.14789,2.47913a.5.5,0,0,0,.75574,0l2.14789-2.47913A.5.5,0,0,0,28.14789,6Z"/>
</svg>
);

export const InboxDown = createIcon(SVG, 'InboxDown');
