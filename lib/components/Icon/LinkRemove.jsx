
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="link-remove" d="M30,13.5v5A4.5,4.5,0,0,1,25.5,23H19a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h6.5A1.5,1.5,0,0,0,27,18.5v-5A1.5,1.5,0,0,0,25.5,12H19a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h6.5A4.5,4.5,0,0,1,30,13.5ZM19.34473,6.92383a.99865.99865,0,0,0,1.30664-.54053l.86425-2.08789A.99963.99963,0,1,0,19.668,3.53174l-.86426,2.085A.99969.99969,0,0,0,19.34473,6.92383Zm-7.9961-.54053a1.00019,1.00019,0,0,0,1.84766-.7666l-.86426-2.085a.99963.99963,0,1,0-1.84765.76367ZM16,2a.99974.99974,0,0,0-1,1V5a1,1,0,0,0,2,0V3A.99974.99974,0,0,0,16,2ZM13,9H6.5A4.5,4.5,0,0,0,2,13.5v5A4.5,4.5,0,0,0,6.5,23H13a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H6.5A1.5,1.5,0,0,1,5,18.5v-5A1.5,1.5,0,0,1,6.5,12H13a1,1,0,0,0,1-1V10A1,1,0,0,0,13,9Zm7.65137,16.6167a1.00019,1.00019,0,0,0-1.84766.7666l.86426,2.085a.99963.99963,0,1,0,1.84765-.76367ZM16,26a.99974.99974,0,0,0-1,1v2a1,1,0,0,0,2,0V27A.99974.99974,0,0,0,16,26Zm-3.34473-.92383a1.0015,1.0015,0,0,0-1.30664.54053l-.86425,2.08789a.99963.99963,0,1,0,1.84765.76367l.86426-2.085A.99969.99969,0,0,0,12.65527,25.07617Z"/>
</svg>
);

export const LinkRemove = createIcon(SVG, 'LinkRemove');
