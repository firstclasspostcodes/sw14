
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="drink" d="M19.65814,26.38605,17,25.5V23h2a1.00018,1.00018,0,0,0,.98047-.80371l3-15A1,1,0,0,0,22,6H18.18018l.21337-1.28027,4.47754-1.791-.74218-1.85742-5,2a1.00118,1.00118,0,0,0-.61524.76416L16.15289,6H9a1,1,0,0,0-.98047,1.19629l3,15A1.00018,1.00018,0,0,0,12,23h2v2.5l-2.65814.88605A.49994.49994,0,0,0,11,26.86035V27.5a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5v-.63965A.49994.49994,0,0,0,19.65814,26.38605ZM17.84686,8h2.93341l-.4,2h-2.8667Zm-2.36059,2H10.61969l-.4-2h5.59985Z"/>
</svg>
);

export const Drink = createIcon(SVG, 'Drink');
