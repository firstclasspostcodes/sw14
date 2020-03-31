import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from '../Typography';

import { Code } from '.';

storiesOf('Components/Code', module).add('Javascript', () => {
  const code = `
    // hello world
    const greeting = 'hello';
  `;

  return <Code language="javascript">{code}</Code>;
});

storiesOf('Components/Code.Sample', module).add('Inline code', () => {
  return (
    <Typography.P>
      In Javascript, use <Code.Sample>this</Code.Sample> to access the execution context.
    </Typography.P>
  );
});
