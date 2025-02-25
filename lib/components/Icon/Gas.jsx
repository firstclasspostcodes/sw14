
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="gas" d="M23,18.5a8.58,8.58,0,0,1-3.45929,7.18359.49773.49773,0,0,1-.752-.61621c1.85882-3.7207-.61731-6.46362-2.44916-9.07251a.50074.50074,0,0,0-.76764-.06653c-1.77447,1.7876-3.78821,4.06922-2.52826,7.61145a.501.501,0,0,1-.81225.53272c-6.912-6.512-.34363-14.81787,5.15393-19.552a.495.495,0,0,1,.79889.27C19.41467,9.42883,23,13.76624,23,18.5Z"/>
</svg>
);

export const Gas = createIcon(SVG, 'Gas');
