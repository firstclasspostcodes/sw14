
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="folder-refresh" d="M17.16,10H4V7A2.00006,2.00006,0,0,1,6,5h4.17157a1.99993,1.99993,0,0,1,1.41425.58582L13,7h3.645a2.45075,2.45075,0,0,0,.025.5459Zm7.83216,3.99854a7.97189,7.97189,0,0,1-4.18262-1.18506A2.43238,2.43238,0,0,1,17.78168,12H4V26a2.00006,2.00006,0,0,0,2,2H26a2.00006,2.00006,0,0,0,2-2V13.40991a8.00026,8.00026,0,0,1-2.52344.574C25.31348,13.99365,25.15234,13.99854,24.99219,13.99854ZM30.6629,1.31445a.4445.4445,0,0,0-.75018-.227l-.6864.686c-.08392-.085-.155-.17969-.24536-.25977a6.00442,6.00442,0,0,0-9.66309,2.55542.495.495,0,0,0,.38342.63111l1.00855.2019a.51032.51032,0,0,0,.57355-.33887,3.86648,3.86648,0,0,1,.72638-1.217,3.97211,3.97211,0,0,1,2.75244-1.3374c.08105-.00488.16259-.00684.24316-.00684a3.96624,3.96624,0,0,1,2.64844,1.00782c.06048.05371.10217.12109.15814.17822l-.72467.72461a.44478.44478,0,0,0,.22717.75049l3.53174.706a.44452.44452,0,0,0,.52307-.52307Zm-.36456,5.98511L29.29016,7.0979a.51032.51032,0,0,0-.57355.33887,3.86648,3.86648,0,0,1-.72638,1.217,3.97211,3.97211,0,0,1-2.75244,1.3374,4.0567,4.0567,0,0,1-2.8916-1.001c-.05207-.04905-.10217-.12109-.15814-.17822l.72467-.72461a.44478.44478,0,0,0-.22717-.75049l-3.53186-.706a.44437.44437,0,0,0-.523.52295l.70636,3.53174a.4445.4445,0,0,0,.75018.22705l.68634-.686c.08392.085.15509.17969.24542.25977a5.9514,5.9514,0,0,0,3.97266,1.51221c.12146,0,.24286-.00391.36529-.01124a5.81641,5.81641,0,0,0,2.91108-.94433A6.12212,6.12212,0,0,0,30.682,7.93127.4956.4956,0,0,0,30.29834,7.29956Z"/>
</svg>
);

export const FolderRefresh = createIcon(SVG, 'FolderRefresh');
