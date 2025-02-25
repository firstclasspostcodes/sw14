
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="watch" d="M24,15h-.65057a7.4958,7.4958,0,0,0-2.59278-4.29785L19.653,4.81567A1,1,0,0,0,18.67,4H13.33a1,1,0,0,0-.98291.81567l-1.1037,5.88648A7.49726,7.49726,0,0,0,11.257,22.308l.95947,4.88477A1,1,0,0,0,13.19769,28h5.60462a1,1,0,0,0,.98126-.80725L20.743,22.308A7.49507,7.49507,0,0,0,23.34943,18H24a1,1,0,0,0,1-1V16A1,1,0,0,0,24,15Zm-8,7a5.5,5.5,0,1,1,5.5-5.5A5.50623,5.50623,0,0,1,16,22Zm3-5a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V14a1,1,0,0,1,2,0v2h1A1,1,0,0,1,19,17Z"/>
</svg>
);

export const Watch = createIcon(SVG, 'Watch');
