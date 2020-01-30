
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder-star" d="M19.53973,10H4V7A2.00006,2.00006,0,0,1,6,5h4.17157a1.99993,1.99993,0,0,1,1.41425.58582L13,7h4.11945a2.42413,2.42413,0,0,0,.41571.394L19.8418,9.07031Zm5.46418,2.81982-2.30176,1.67237a2.41657,2.41657,0,0,1-1.42676.46582A2.40835,2.40835,0,0,1,18.9184,12H4V26a2.00006,2.00006,0,0,0,2,2H26a2.00006,2.00006,0,0,0,2-2V14.843a2.44206,2.44206,0,0,1-.69336-.35132ZM31.04474,5H26.74152l-.64557-1.98755L25.41235.90723a.42927.42927,0,0,0-.81659,0l-.68359,2.10522L23.2666,5H18.96338a.42931.42931,0,0,0-.25232.77661l1.79132,1.30127,1.69074,1.228-.64539,1.98742L20.86548,12.394a.42933.42933,0,0,0,.66058.48l1.78766-1.29834,1.69037-1.228,1.69031,1.228L28.48206,12.874a.42933.42933,0,0,0,.66058-.48l-.68225-2.10071L27.815,8.30591l1.69074-1.228,1.79132-1.30127A.42931.42931,0,0,0,31.04474,5Z"/>
</svg>
);

export const FolderStar = createIcon(SVG, 'FolderStar');
