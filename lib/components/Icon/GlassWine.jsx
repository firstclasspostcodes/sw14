
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="glass-wine" d="M18,17.92212V25l4.64368,1.39313A.49991.49991,0,0,1,23,26.872V27.5a.5.5,0,0,1-.5.5h-12a.5.5,0,0,1-.5-.5v-.628a.49991.49991,0,0,1,.35632-.47888L15,25V17.92212C11.62054,17.4458,9,14.55811,9,10V5a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1v5C24,14.55811,21.37946,17.4458,18,17.92212Z"/>
</svg>
);

export const GlassWine = createIcon(SVG, 'GlassWine');
