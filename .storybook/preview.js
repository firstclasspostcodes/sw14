import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { Baseline, ThemeProvider } from '../lib';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
 
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(storyFn => (
  <ThemeProvider>
    <>
      <Baseline rootId="#root"/>
      {storyFn()}
    </>
  </ThemeProvider>
));