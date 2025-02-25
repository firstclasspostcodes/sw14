
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="temperature-set" d="M21.6499,4.18762,24.60956.488a.5.5,0,0,1,.78088,0L28.3501,4.18762A.5.5,0,0,1,27.95972,5H22.04028A.5.5,0,0,1,21.6499,4.18762ZM27.95972,7H22.04028a.49992.49992,0,0,0-.39038.81226l2.95966,3.6997a.5.5,0,0,0,.78088,0l2.95966-3.6997A.49992.49992,0,0,0,27.95972,7ZM17,18.835a5.50005,5.50005,0,1,1-8,0V8.08594a4,4,0,0,1,8,0Zm-1.5,3.75049A2.5018,2.5018,0,0,0,14,20.29736V14.08545a1,1,0,0,0-2,0v6.21191a2.49874,2.49874,0,1,0,3.5,2.28809Z"/>
</svg>
);

export const TemperatureSet = createIcon(SVG, 'TemperatureSet');
