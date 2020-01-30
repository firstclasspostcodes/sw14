
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="file-refresh" d="M25.47656,13.98389c.17646-.0105.34961-.03516.52344-.05689V27a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h9.26013c-.01092.04224-.02826.08252-.03845.125l-.48633,2.02148a5.27294,5.27294,0,0,0-.06543,1.39942l.70508,3.53027a2.4525,2.4525,0,0,0,2.39941,1.9668,2.423,2.423,0,0,0,1.03516-.22949,7.97189,7.97189,0,0,0,4.18262,1.18506C25.15234,13.99854,25.31348,13.99365,25.47656,13.98389ZM30.6629,1.31445a.4445.4445,0,0,0-.75018-.227l-.6864.686c-.08392-.085-.155-.17969-.24536-.25977a6.00249,6.00249,0,0,0-9.81464,3.07959l1.98212.39649a3.94454,3.94454,0,0,1,3.61377-2.981c.08105-.00488.16259-.00684.24316-.00684a3.96624,3.96624,0,0,1,2.64844,1.00782c.06048.05371.10217.12109.15814.17822l-.72467.72461a.44478.44478,0,0,0,.22717.75049l3.53174.706a.44435.44435,0,0,0,.52307-.52295ZM27.99023,8.65381a3.998,3.998,0,0,1-5.644.33691s-.10217-.12158-.15814-.17871l.72467-.72461a.44478.44478,0,0,0-.22717-.75049l-3.53174-.706a.44435.44435,0,0,0-.52307.52295l.70636,3.53174a.4445.4445,0,0,0,.75018.22705l.68634-.686c.08392.085.15509.17969.24542.25977a5.9514,5.9514,0,0,0,3.97266,1.51221c.12158,0,.24316-.00391.36572-.01124a6.00608,6.00608,0,0,0,5.47626-4.58056l-1.98212-.39649A3.965,3.965,0,0,1,27.99023,8.65381Z"/>
</svg>
);

export const FileRefresh = createIcon(SVG, 'FileRefresh');
