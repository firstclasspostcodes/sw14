
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chemistry-alt" d="M25.44727,23.6582l-5.3418-10.68359A.99655.99655,0,0,1,20,12.52832V5a.99943.99943,0,0,0-1-1H13a.99943.99943,0,0,0-1,1v7.52832a.99655.99655,0,0,1-.10547.44629L6.55273,23.6582A2.99966,2.99966,0,0,0,9.23633,28H22.76367a2.99966,2.99966,0,0,0,2.6836-4.3418ZM18,21a1,1,0,0,0-2,0H10.11816l3.56543-7.13086A3.01406,3.01406,0,0,0,14,12.52832V6h4v6.52832a3.01406,3.01406,0,0,0,.31641,1.34082L21.88184,21Zm-1-7a1,1,0,1,1-1-1A1,1,0,0,1,17,14Zm-1,4.5A1.5,1.5,0,1,1,14.5,17,1.5,1.5,0,0,1,16,18.5Z"/>
</svg>
);

export const ChemistryAlt = createIcon(SVG, 'ChemistryAlt');
