
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="reload-alt" d="M24.51022,7.56419a11.9833,11.9833,0,0,1-8.99492,20.4262A11.99529,11.99529,0,0,1,15,4.05078V1.95431a.5.5,0,0,1,.78461-.4111l5.12158,3.54566a.5.5,0,0,1,0,.82226L15.78463,9.45677A.5.5,0,0,1,15,9.04565V7.05908a8.99829,8.99829,0,0,0,1.26016,17.93723,9.10566,9.10566,0,0,0,8.73421-9.31663,8.97355,8.97355,0,0,0-2.835-6.233.50278.50278,0,0,1,.04467-.7852l1.6625-1.15108A.50545.50545,0,0,1,24.51022,7.56419Z"/>
</svg>
);

export const ReloadAlt = createIcon(SVG, 'ReloadAlt');
