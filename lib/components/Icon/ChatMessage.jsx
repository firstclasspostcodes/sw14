
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chat-message" d="M24.5,5H7.5A3.50424,3.50424,0,0,0,4,8.5v11A3.50424,3.50424,0,0,0,7.5,23H9v3.5a1.93406,1.93406,0,0,0,1.13281,1.88574,1.733,1.733,0,0,0,.665.1333,2.09429,2.09429,0,0,0,1.46973-.66552L17.12109,23H24.5A3.50424,3.50424,0,0,0,28,19.5V8.5A3.50424,3.50424,0,0,0,24.5,5ZM25,19.5a.50641.50641,0,0,1-.5.5H15.87891L12,23.87891V20H7.5a.50641.50641,0,0,1-.5-.5V8.5A.50641.50641,0,0,1,7.5,8h17a.50641.50641,0,0,1,.5.5Z"/>
</svg>
);

export const ChatMessage = createIcon(SVG, 'ChatMessage');
