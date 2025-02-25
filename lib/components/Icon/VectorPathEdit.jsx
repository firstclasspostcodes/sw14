
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vector-path-edit" d="M10,4H5A1,1,0,0,0,4,5v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V5A1,1,0,0,0,10,4ZM9,9H6V6H9Zm5.166,14h3.667v3H14.166Zm.001-17h3.667V9H14.167ZM10,21H5a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V22A1,1,0,0,0,10,21ZM9,26H6V23H9ZM9,14.167V17.8335H6V14.167Zm17-.00049V17.833H23V14.1665ZM27,21H22a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V22A1,1,0,0,0,27,21Zm-1,5H23V23h3ZM27,4H22a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V5A1,1,0,0,0,27,4ZM26,9H23V6h3Z"/>
</svg>
);

export const VectorPathEdit = createIcon(SVG, 'VectorPathEdit');
