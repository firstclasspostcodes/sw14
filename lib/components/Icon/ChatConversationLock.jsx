
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="chat-conversation-lock" d="M14.12109,19l-3.85351,3.85352a2.09429,2.09429,0,0,1-1.46973.66552,1.733,1.733,0,0,1-.665-.1333A1.93406,1.93406,0,0,1,7,21.5V18.96436A3.50487,3.50487,0,0,1,4,15.5v-7A3.50424,3.50424,0,0,1,7.5,5H19V8H7.5a.50641.50641,0,0,0-.5.5v7a.50641.50641,0,0,0,.5.5H10v2.87891L12.87891,16H19.5a.50641.50641,0,0,0,.5-.5V13.21973A2.97711,2.97711,0,0,0,22,14h1v1.5A3.50424,3.50424,0,0,1,19.5,19ZM25,20.5a.50641.50641,0,0,1-.5.5H22v2.87891L19.12109,21H14.94971l-2.94977,2.94946A3.45466,3.45466,0,0,0,12.5,24h5.37891l3.85351,3.85352a2.09422,2.09422,0,0,0,1.46973.66552,1.733,1.733,0,0,0,.665-.1333A1.93406,1.93406,0,0,0,25,26.5V23.96436A3.50487,3.50487,0,0,0,28,20.5V14H25ZM32,5v6a1.003,1.003,0,0,1-1,1H22a1.003,1.003,0,0,1-1-1V5a1.003,1.003,0,0,1,1-1h1V2a2.0026,2.0026,0,0,1,2-2h3a2.0026,2.0026,0,0,1,2,2V4h1A1.003,1.003,0,0,1,32,5ZM28,2.25A.25.25,0,0,0,27.75,2h-2.5a.25.25,0,0,0-.25.25V4h3Z"/>
</svg>
);

export const ChatConversationLock = createIcon(SVG, 'ChatConversationLock');
