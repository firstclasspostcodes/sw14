
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="security-camera" d="M28,18v9H26a1,1,0,0,1-1-1V24H21a1.4998,1.4998,0,0,1-1.4043-.97363l-2.34521-6.254-5.2461,1.4057a.49993.49993,0,0,1-.50347-.15124l-6.676-7.52863a.5.5,0,0,1,.24469-.8147l18.53705-4.967a1,1,0,0,1,1.22473.70716L26.90192,13.151a1,1,0,0,1-.7071,1.22479l-6.0335,1.6167L22.03906,21H25V19a1,1,0,0,1,1-1ZM2.61566,13.17889a.5.5,0,0,0-.35351.61237L3.29742,17.655a.5.5,0,0,0,.61237.35357l4.18878-1.12237L4.38965,12.70355Z"/>
</svg>
);

export const SecurityCamera = createIcon(SVG, 'SecurityCamera');
