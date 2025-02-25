
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="list-letters" d="M24,24v1a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V24a1,1,0,0,1,1-1h8A1,1,0,0,1,24,24Zm3-7H15a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Zm-4-6H15a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,23,11Zm4-6H15a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5ZM11.38574,11.61426,8.92188,5.71387a1.00037,1.00037,0,0,0-1.84571,0L4.6123,11.61426a1.00023,1.00023,0,0,0,1.84571.77148L7.0365,11H8.96155L9.54,12.38574a1.00022,1.00022,0,1,0,1.8457-.77148ZM7.66766,9.5l.33088-.92676L8.32941,9.5Zm2.52668,11.17285A2.46777,2.46777,0,0,0,10.5,19.5,2.50231,2.50231,0,0,0,8,17H6a.99943.99943,0,0,0-1,1v6a.99943.99943,0,0,0,1,1H8.5a2.49228,2.49228,0,0,0,1.69434-4.32715ZM7,19H8a.5.5,0,0,1,0,1H7Zm1.5,4H7V22H8.5a.5.5,0,0,1,0,1Z"/>
</svg>
);

export const ListLetters = createIcon(SVG, 'ListLetters');
