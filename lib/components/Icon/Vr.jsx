
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vr" d="M16,7a36.42166,36.42166,0,0,0-4,.22V6a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V7.22A36.42251,36.42251,0,0,0,16,7Zm14,6H29v6h1a1,1,0,0,0,1-1V14A1,1,0,0,0,30,13ZM1,14v4a1,1,0,0,0,1,1H3V13H2A1,1,0,0,0,1,14Zm26-.916v7.21729A3.00034,3.00034,0,0,1,25.54346,22.874l-2.13129,1.27881a3.00025,3.00025,0,0,1-2.88513.1106L17.34161,22.6709a2.99943,2.99943,0,0,0-2.68322,0L11.473,24.26343a3.00025,3.00025,0,0,1-2.88513-.1106L6.45654,22.874A3.00034,3.00034,0,0,1,5,20.30127V13.084a2.99163,2.99163,0,0,1,2.12244-2.87036A30.88173,30.88173,0,0,1,16,9a30.88173,30.88173,0,0,1,8.87756,1.21362A2.99163,2.99163,0,0,1,27,13.084Zm-2.71094-.959A28.83125,28.83125,0,0,0,16,11a29.95148,29.95148,0,0,0-7.5127.91016A2.00009,2.00009,0,0,0,7,13.8457V16a1,1,0,0,0,2,0l-.00488-2.15527A27.9247,27.9247,0,0,1,16,13a26.85813,26.85813,0,0,1,7.71094,1.03906.99973.99973,0,1,0,.57812-1.91406Z"/>
</svg>
);

export const Vr = createIcon(SVG, 'Vr');
