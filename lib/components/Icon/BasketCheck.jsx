
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="basket-check" d="M10.29846,8.32983a.5.5,0,0,1-.00549-.66467L11.46735,6.323a.5.5,0,0,1,.64477-.09253L14.5,7.75l5.8587-5.12341a.50015.50015,0,0,1,.669.00964L22.151,3.67676a.49991.49991,0,0,1,.04346.68786l-6.70691,8.005a1,1,0,0,1-1.50806.02881ZM28,15v2a.99943.99943,0,0,1-1,1H25.5l-.81989,8.199A2,2,0,0,1,22.69,28H9.31a2,2,0,0,1-1.99011-1.801L6.5,18H5a.99943.99943,0,0,1-1-1V15a.99943.99943,0,0,1,1-1H27A.99943.99943,0,0,1,28,15ZM12,23H10v2h2Zm0-5H10v2h2Zm5,5H15v2h2Zm0-5H15v2h2Zm5,5H20v2h2Zm0-5H20v2h2Z"/>
</svg>
);

export const BasketCheck = createIcon(SVG, 'BasketCheck');
