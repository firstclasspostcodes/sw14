
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="forward-fifteen" d="M12,19V15.41406l-.293.293A.99989.99989,0,0,1,10.293,14.293l2-2A.99991.99991,0,0,1,14,13v6a1,1,0,0,1-2,0Zm7-1H17a1,1,0,0,0,0,2h2a2.5,2.5,0,0,0,0-5H18V14h2a1,1,0,0,0,0-2H17a.99943.99943,0,0,0-1,1v3a.99943.99943,0,0,0,1,1h2a.5.5,0,0,1,0,1Zm7.61572-7.56592a.502.502,0,0,0-.728-.16919l-1.65314,1.14453a.4947.4947,0,0,0-.156.6316,8.99373,8.99373,0,0,1-8.33868,12.95532,9.10052,9.10052,0,0,1-8.73615-8.73609A9.00947,9.00947,0,0,1,16,7V9.04565a.50005.50005,0,0,0,.78461.41114L21,6.53857V9.04565a.50005.50005,0,0,0,.78461.41114l5.12158-3.54566a.5.5,0,0,0,0-.82226L21.78461,1.54321A.5.5,0,0,0,21,1.95435V4.46143L16.78461,1.54321A.50005.50005,0,0,0,16,1.95435V4a12.03062,12.03062,0,1,0,10.61572,6.43408Z"/>
</svg>
);

export const ForwardFifteen = createIcon(SVG, 'ForwardFifteen');
