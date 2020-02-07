import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider as Styled } from 'styled-components';
import PropTypes from 'prop-types';

export const ThemeProvider = ({ theme, children }) => {
  const { fontFace } = theme.font;
  return (
    <>
      <Helmet>
        <link href={fontFace} rel="stylesheet" />
      </Helmet>
      <Styled theme={theme}>{children}</Styled>
    </>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
};
