import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider as Styled } from 'styled-components';
import PropTypes from 'prop-types';
import merge from 'deepmerge';

import Theme from '../../../theme';

export const ThemeProvider = ({ theme, children }) => {
  const mergedTheme = merge(theme, Theme);
  const { fontFace } = mergedTheme.font;
  return (
    <>
      <Helmet>
        <link href={fontFace} rel="stylesheet" />
      </Helmet>
      <Styled theme={mergedTheme}>{children}</Styled>
    </>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.shape,
  children: PropTypes.element.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};
