import React from 'react';
import { ThemeProvider as Styled } from 'styled-components';
import PropTypes from 'prop-types';
import merge from 'deepmerge';

import Theme from '../../../theme';

export const ThemeProvider = ({ theme, children }) => (
  <Styled theme={merge(theme, Theme)}>{children}</Styled>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape,
  children: PropTypes.element.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};
