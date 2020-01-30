
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mobile-phone-check" d="M21,22H11V7h7.06946A8.00855,8.00855,0,0,1,18,6a7.95978,7.95978,0,0,1,.26331-2H10.5A2.50263,2.50263,0,0,0,8,6.5v19A2.50263,2.50263,0,0,0,10.5,28h11A2.50263,2.50263,0,0,0,24,25.5V13.73682a7.97423,7.97423,0,0,1-3-1.50171Zm-4,3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM26,0a6,6,0,1,0,6,6A6,6,0,0,0,26,0Zm3.2,4.11816L26.09052,8.69287a.83047.83047,0,0,1-1.29761.1001L22.55963,6.55688a.29668.29668,0,0,1-.02673-.3767l.43353-.55469a.32294.32294,0,0,1,.377-.09522l1.766.84473,3.15-2.96069a.29682.29682,0,0,1,.37677-.02661l.51147.37866A.25366.25366,0,0,1,29.2,4.11816Z"/>
</svg>
);

export const MobilePhoneCheck = createIcon(SVG, 'MobilePhoneCheck');
