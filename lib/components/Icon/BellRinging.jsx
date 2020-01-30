
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bell-ringing" d="M6,17a.99974.99974,0,0,1-1-1V13A10.934,10.934,0,0,1,6.5,7.49609.99959.99959,0,1,1,8.22656,8.50391,8.93468,8.93468,0,0,0,7,13v3A.99974.99974,0,0,1,6,17ZM3.31738,7.06738a.99967.99967,0,0,0-1.29394.57129A14.81485,14.81485,0,0,0,1,13v3a1,1,0,0,0,2,0V13a12.80446,12.80446,0,0,1,.88867-4.63867A1.00083,1.00083,0,0,0,3.31738,7.06738ZM14,27a2,2,0,0,0,4,0V26H14Zm11.10938-6.59375-.32819-.21881A3.99993,3.99993,0,0,1,23,16.85925V13.29346a7.31386,7.31386,0,0,0-5-6.98273V5a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1V6.29364A7.00018,7.00018,0,0,0,9,13v3.85925a3.99993,3.99993,0,0,1-1.78119,3.32819l-.32819.21881A2.00005,2.00005,0,0,0,6,22.07037V23a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1v-.92963A2.00005,2.00005,0,0,0,25.10938,20.40625ZM29.87793,7.62744a.99975.99975,0,1,0-1.85547.74512A13.17141,13.17141,0,0,1,29,13.29346V16a1,1,0,0,0,2,0V13.29346A15.15884,15.15884,0,0,0,29.87793,7.62744Zm-5.85156-.48779a1,1,0,0,0-.35059,1.37012A9.39492,9.39492,0,0,1,25,13.29346V16a1,1,0,0,0,2,0V13.29346a11.39551,11.39551,0,0,0-1.60352-5.80323A.99908.99908,0,0,0,24.02637,7.13965Z"/>
</svg>
);

export const BellRinging = createIcon(SVG, 'BellRinging');
