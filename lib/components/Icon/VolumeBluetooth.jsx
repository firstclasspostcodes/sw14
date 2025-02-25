
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="volume-bluetooth" d="M16.00012,8.63647V23.36353a.8.8,0,0,1-1.29138.63128L9.57654,20H5a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H9.57654l5.1322-3.99481A.8.8,0,0,1,16.00012,8.63647ZM28.4386,17.96783a.5.5,0,0,1,.02014.78406l-5.63861,4.69977A.5.5,0,0,1,22,23.06763v-5.2063l-1.93347,1.45a.99971.99971,0,0,1-1.19971-1.59949L21.81512,15.5l-2.9483-2.21179a.99971.99971,0,0,1,1.19971-1.59949L22,13.13867V7.93237a.5.5,0,0,1,.82013-.384l5.63861,4.69977a.5.5,0,0,1-.02014.78406L25.14838,15.5ZM24,13.86133l1.72168-1.29151L24,11.13525Zm1.72168,4.56885L24,17.13867v2.72608Z"/>
</svg>
);

export const VolumeBluetooth = createIcon(SVG, 'VolumeBluetooth');
