
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="kiosk-immobile" d="M29,11.23639V12a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1v-.76361a.99979.99979,0,0,1,.10559-.44733L5,7H27l1.89441,3.78906A.99979.99979,0,0,1,29,11.23639ZM27,4a2,2,0,0,0-2-2H7A2,2,0,0,0,5,4V5H27Zm-.5,15H26V15H24v4H8V15H6v4H5.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h5.74988l1.85711.6842L6.6543,26.06152a1.00013,1.00013,0,0,0,.6914,1.877L16,24.75006l8.6543,3.18842a1.00013,1.00013,0,1,0,.6914-1.877L18.893,23.6842,20.75012,23H26.5a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,26.5,19Z"/>
</svg>
);

export const KioskImmobile = createIcon(SVG, 'KioskImmobile');
