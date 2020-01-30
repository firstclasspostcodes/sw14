
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tea-leaves" d="M19.04889,11.267c3.04791,3.04791,4.91748,8.356,2.78284,11.80865L7.41406,9.479a.51792.51792,0,0,0-.71728.01075l-.207.207a.518.518,0,0,0-.0105.71728l13.6275,14.45081c-3.34534,2.3053-8.151.8728-11.83978-2.816C3.51752,17.29944,3.9848,9.45605,4.16321,7.65668a.46434.46434,0,0,1,.41858-.42133C6.389,7.0434,14.29675,6.51483,19.04889,11.267Zm8.7959-3.73383a.47543.47543,0,0,0-.43537-.43249,16.64816,16.64816,0,0,0-8.49926,1.41546A13.85392,13.85392,0,0,1,20.46289,9.853a14.749,14.749,0,0,1,1.54169,1.82519L25.128,8.91455a.53821.53821,0,0,1,.728.02228l.207.207a.52471.52471,0,0,1,.01434.721l-3.10162,3.35968a13.93221,13.93221,0,0,1,1.71118,5.3518c.01819-.01788.03827-.03466.05627-.05267C28.30383,14.963,27.99792,9.09186,27.84479,7.53314Z"/>
</svg>
);

export const TeaLeaves = createIcon(SVG, 'TeaLeaves');
