
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="baseball" d="M27,24a3,3,0,1,1-3-3A3,3,0,0,1,27,24Zm.85339-19.14667-.70678-.70672a2,2,0,0,0-2.82837,0l-8.58582,8.58581-5.293,6.707L5.64661,24.2323l-.3537-.35364a.5.5,0,0,0-.70709,0l-.70716.70709a.50009.50009,0,0,0,0,.70716l2.82843,2.82837a.49989.49989,0,0,0,.70709,0l.70716-.7071a.5.5,0,0,0,0-.70709l-.35364-.3537,4.79285-4.79284,6.707-5.293,8.58581-8.58582A2.00007,2.00007,0,0,0,27.85339,4.85333Z"/>
</svg>
);

export const Baseball = createIcon(SVG, 'Baseball');
