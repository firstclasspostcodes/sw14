
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="qr-code" d="M13,4H4v9h9Zm-3,6H7V7h3Zm9-6v9h9V4Zm6,6H22V7h3ZM4,28h9V19H4Zm3-6h3v3H7Zm10-7v2H12V15Zm-2,4h2v3H15Zm0,5h4v4H15Zm6,2h7v2H21Zm5-11h2v9H26V22H24V20h2ZM6,17H4V15H6Zm2,0V15h2v2ZM17,7H15V4h2Zm0,6H15V9h2Zm4,9h3v2H19V19H17V17h2V15h5v2H21Z"/>
</svg>
);

export const QrCode = createIcon(SVG, 'QrCode');
