
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="watch-squared" d="M20.446,9.04492l-.793-4.22925A1,1,0,0,0,18.67,4H13.33a1,1,0,0,0-.98291.81567l-.793,4.22925A2.992,2.992,0,0,0,9,12v8a2.99993,2.99993,0,0,0,2.37994,2.9342l.83649,4.25855A1,1,0,0,0,13.19769,28h5.60462a1,1,0,0,0,.98126-.80725l.83649-4.25855A2.99993,2.99993,0,0,0,23,20V12A2.992,2.992,0,0,0,20.446,9.04492ZM21,20a1.00115,1.00115,0,0,1-1,1H12a1.00115,1.00115,0,0,1-1-1V12a1.00115,1.00115,0,0,1,1-1h8a1.00115,1.00115,0,0,1,1,1Zm-2-3a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V14a1,1,0,0,1,2,0v2h1A1,1,0,0,1,19,17Z"/>
</svg>
);

export const WatchSquared = createIcon(SVG, 'WatchSquared');
