
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="book-address" d="M25,4H10A3.99992,3.99992,0,0,0,6,8V24a4,4,0,0,0,4,4H25a1,1,0,0,0,1-1V25H10a1,1,0,0,1,0-2H26V5A1,1,0,0,0,25,4ZM20.06287,18.49219A.50775.50775,0,0,1,19.555,19h-7.11a.50775.50775,0,0,1-.50788-.50781V17.526a1.01619,1.01619,0,0,1,.4704-.85705l1.56085-.99292-.14721-1.17725a1.48129,1.48129,0,0,1-.77161-.811l-.10876-.32617a.74083.74083,0,0,1,.05438-.63537V10.89563a3.00482,3.00482,0,1,1,6.00964,0V12.7262a.74083.74083,0,0,1,.05438.63537l-.10876.32617a1.48129,1.48129,0,0,1-.77161.811L18.03162,15.676l1.56085.99292a1.01619,1.01619,0,0,1,.4704.85705ZM31,20v3a1,1,0,0,1-1,1H28V19h2A1,1,0,0,1,31,20Zm0-7v3a1,1,0,0,1-1,1H28V12h2A1,1,0,0,1,31,13Zm0-7V9a1,1,0,0,1-1,1H28V5h2A1,1,0,0,1,31,6Z"/>
</svg>
);

export const BookAddress = createIcon(SVG, 'BookAddress');
