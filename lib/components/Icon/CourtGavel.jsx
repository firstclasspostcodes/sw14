
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="court-gavel" d="M27.81445,26.1853,27.707,26.293H27.707l-.86987.86987-.65149.65161a.848.848,0,0,1-1.19946,0l-3.84589-3.8457-5.78113-7.19556-.59137-.59131-1.56073,1.5608a.50011.50011,0,0,1-.70709,0L6.25739,11.5a.4998.4998,0,0,1,0-.707l4.53552-4.53565a.49989.49989,0,0,1,.70709,0L17.74261,12.5a.4998.4998,0,0,1,0,.707l-1.56073,1.56079.59137.59131,7.19519,5.781,3.84595,3.84594A.84793.84793,0,0,1,27.81445,26.1853ZM19.54071,11.46973a.25022.25022,0,0,0,.35358,0l.53033-.5304a1,1,0,0,0,0-1.41418L14.47485,3.57544a.99977.99977,0,0,0-1.41418,0l-.53034.53027a.24993.24993,0,0,0,0,.35352ZM4.45929,12.53027a.25.25,0,0,0-.35358,0l-.53033.5304a1,1,0,0,0,0,1.41418l5.94977,5.94971a.99977.99977,0,0,0,1.41418,0l.53034-.53027a.24993.24993,0,0,0,0-.35352Z"/>
</svg>
);

export const CourtGavel = createIcon(SVG, 'CourtGavel');
