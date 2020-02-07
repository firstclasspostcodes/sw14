import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { Baseline, ThemeProvider, Theme } from '../lib';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

Theme.rootId = '#root';
 
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(storyFn => (
  <ThemeProvider theme={Theme}>
    <Baseline />
    {storyFn()}
  </ThemeProvider>
));