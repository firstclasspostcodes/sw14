import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Baseline, Theme } from '../lib';

addDecorator(storyFn => (
  <ThemeProvider theme={Theme}>
    <>
      <Baseline/>
      {storyFn()}
    </>
  </ThemeProvider>
));