
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chat-message-lock" d="M25,14h3v5.5A3.50424,3.50424,0,0,1,24.5,23H17.12109l-4.85351,4.85352a2.09429,2.09429,0,0,1-1.46973.66552,1.733,1.733,0,0,1-.665-.1333A1.93406,1.93406,0,0,1,9,26.5V23H7.5A3.50424,3.50424,0,0,1,4,19.5V8.5A3.50424,3.50424,0,0,1,7.5,5H19V8H7.5a.50641.50641,0,0,0-.5.5v11a.50641.50641,0,0,0,.5.5H12v3.87891L15.87891,20H24.5a.50641.50641,0,0,0,.5-.5Zm7-9v6a1.003,1.003,0,0,1-1,1H22a1.003,1.003,0,0,1-1-1V5a1.003,1.003,0,0,1,1-1h1V2a2.0026,2.0026,0,0,1,2-2h3a2.0026,2.0026,0,0,1,2,2V4h1A1.003,1.003,0,0,1,32,5ZM28,2.25A.25.25,0,0,0,27.75,2h-2.5a.25.25,0,0,0-.25.25V4h3Z"/>
</svg>
);

export const ChatMessageLock = createIcon(SVG, 'ChatMessageLock');
