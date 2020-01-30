
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="view-half" d="M28,11H27a.99943.99943,0,0,0-1,1v1a.99943.99943,0,0,0,1,1h1a.99943.99943,0,0,0,1-1V12A.99943.99943,0,0,0,28,11ZM15.5,12h-1A2.50231,2.50231,0,0,0,12,14.5a2.47637,2.47637,0,0,0,.51245,1.5A2.47637,2.47637,0,0,0,12,17.5,2.50231,2.50231,0,0,0,14.5,20h1A2.50231,2.50231,0,0,0,18,17.5a2.47637,2.47637,0,0,0-.51245-1.5A2.47637,2.47637,0,0,0,18,14.5,2.50231,2.50231,0,0,0,15.5,12Zm-1,2h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm1,4h-1a.5.5,0,0,1,0-1h1a.5.5,0,0,1,0,1ZM22,12a3.00328,3.00328,0,0,0-3,3v2a3,3,0,0,0,6,0V15A3.00328,3.00328,0,0,0,22,12Zm1,5a1,1,0,0,1-2,0V15a1,1,0,0,1,2,0ZM10,13v6a1,1,0,0,1-2,0V15.41406l-.293.293A.99989.99989,0,0,1,6.293,14.293l2-2A.99991.99991,0,0,1,10,13ZM8.5385,9.51418a.87151.87151,0,0,1-.02421-1.085,11.49872,11.49872,0,0,1,7.48412-3.38038l.00116-1.09521a.5.5,0,0,1,.78485-.41065L20.90405,6.0918a.49989.49989,0,0,1-.00046.822L16.78,9.45679a.5.5,0,0,1-.78442-.41155l.00109-.9864A11.74887,11.74887,0,0,0,9.52837,9.651.80709.80709,0,0,1,8.5385,9.51418Zm14.923,12.97164a.87151.87151,0,0,1,.02421,1.085,11.49872,11.49872,0,0,1-7.48412,3.38038l-.00116,1.09521a.5.5,0,0,1-.78485.41065L11.096,25.9082a.49989.49989,0,0,1,.00046-.822l4.12356-2.543a.5.5,0,0,1,.78442.41155l-.00109.9864A11.74887,11.74887,0,0,0,22.47163,22.349.80709.80709,0,0,1,23.4615,22.48582Z"/>
</svg>
);

export const ViewHalf = createIcon(SVG, 'ViewHalf');
