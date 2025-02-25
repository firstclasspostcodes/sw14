
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="missile" d="M28.18018,12.30518,22.90228,17.583a.9998.9998,0,0,1-.79767.28882l-2.3319.0122L14.41,23.24683l-5.6568-5.65674,5.36267-5.3628.01233-2.33178a1.00038,1.00038,0,0,1,.28882-.79785l5.2779-5.27784a.5.5,0,0,1,.8515.30835L21.039,9.54688l-2.00348,2.00341a1,1,0,0,0,1.41425,1.41407l2.00335-2.00342,5.41877.49267A.5.5,0,0,1,28.18018,12.30518ZM6.30762,20.03564a4,4,0,0,0,5.65686,5.65674l1.03143-1.03149-5.6568-5.65674Z"/>
</svg>
);

export const Missile = createIcon(SVG, 'Missile');
