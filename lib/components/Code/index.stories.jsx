import React from 'react';
import { storiesOf } from '@storybook/react';

import { Code } from '.';

const js = () => {
  const code = `
    // hello world
    const greeting = 'hello';
  `;

  return <Code language="javascript">{code}</Code>;
};

storiesOf('Components/Code', module).add('Javascript', js);
