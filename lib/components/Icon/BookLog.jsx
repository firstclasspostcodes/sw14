
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="book-log" d="M10,23H26V5a1,1,0,0,0-1-1H10A3.99992,3.99992,0,0,0,6,8V24a4,4,0,0,0,4,4H25a1,1,0,0,0,1-1V25H10a1,1,0,0,1,0-2Zm1.27161-8.5896.47589-.59473a.5.5,0,0,1,.614-.13488L15,15l6.39862-5.45068a.50011.50011,0,0,1,.6778.0271l.59082.59082a.5.5,0,0,1,.02075.68505l-6.71308,7.57935a.99994.99994,0,0,1-1.47558.02344l-3.20075-3.38892A.50012.50012,0,0,1,11.27161,14.4104Z"/>
</svg>
);

export const BookLog = createIcon(SVG, 'BookLog');
