
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="shield-star" d="M25.5459,4.8501A23.59806,23.59806,0,0,0,16,3,23.59806,23.59806,0,0,0,6.4541,4.8501,2.50667,2.50667,0,0,0,5,7.12158V14.5c0,7.81592,9.88086,13.106,10.30176,13.32715a1.49672,1.49672,0,0,0,1.39648,0C17.11914,27.606,27,22.31592,27,14.5V7.12158A2.50667,2.50667,0,0,0,25.5459,4.8501Zm-3.24884,7.92651-1.79132,1.30127-1.69074,1.228.64539,1.98748.68225,2.10065a.42931.42931,0,0,1-.66058.48L17.6944,18.57562l-1.69031-1.2279-1.69037,1.2279L12.52606,19.874a.42931.42931,0,0,1-.66058-.48l.68225-2.10065.64539-1.98748-1.69074-1.228L9.71106,12.77661A.42931.42931,0,0,1,9.96338,12H14.2666l.64557-1.98755.68359-2.10522a.42927.42927,0,0,1,.81659,0l.6836,2.10522L17.74152,12h4.30322A.42931.42931,0,0,1,22.29706,12.77661Z"/>
</svg>
);

export const ShieldStar = createIcon(SVG, 'ShieldStar');
