
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="resize-vertical" d="M20.73132,22.61719,16.2868,28.28271a.99987.99987,0,0,1-1.5736,0l-4.44452-5.66552A1,1,0,0,1,11.05548,21H13V18a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3h1.94452A1,1,0,0,1,20.73132,22.61719ZM11.05548,11H13v3a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V11h1.94452a1,1,0,0,0,.7868-1.61719L16.2868,3.71729a.99987.99987,0,0,0-1.5736,0L10.26868,9.38281A1,1,0,0,0,11.05548,11Z"/>
</svg>
);

export const ResizeVertical = createIcon(SVG, 'ResizeVertical');
