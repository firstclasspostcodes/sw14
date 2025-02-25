
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="neighborhood" d="M30.905,16H29v5.5a.5.5,0,0,1-.5.5H23V18h3.22683a1,1,0,0,0,.74741-1.66436l-4.18481-4.708L25.12213,8.936a.5.5,0,0,1,.75574,0l5.405,6.23657A.5.5,0,0,1,30.905,16Zm-25.87927.33564,4.18481-4.708L6.87787,8.936a.5.5,0,0,0-.75574,0l-5.405,6.23657A.5.5,0,0,0,1.095,16H3v5.5a.5.5,0,0,0,.5.5H9V18H5.77317A1,1,0,0,1,5.02576,16.33564Zm18.23449-1.16792L16.37372,7.42041a.5.5,0,0,0-.74744,0L8.73975,15.16772A.5.5,0,0,0,9.1134,16H11v7.5a.5.5,0,0,0,.5.5H14V20.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V24h2.5a.5.5,0,0,0,.5-.5V16h1.8866A.5.5,0,0,0,23.26025,15.16772Z"/>
</svg>
);

export const Neighborhood = createIcon(SVG, 'Neighborhood');
