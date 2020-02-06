import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeProvider } from '../../../components/ThemeProvider';
import { Baseline } from '../../../components/Baseline';
import { Pane } from '../../../components/Pane';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const Content = styled.div`
  flex: 1 0 auto;
`;

Content.displayName = 'Layout.Content';

export const Layout = ({ headerProps, footerProps, theme, children }) => (
  <ThemeProvider theme={theme}>
    <Baseline />
    <Header {...headerProps} skipLinkHref="#main-content-area" />
    <Content id="main-content-area">
      <Pane.Constrained spacing={{ px: 2 }}>{children}</Pane.Constrained>
    </Content>
    <Footer {...footerProps} />
  </ThemeProvider>
);

Layout.propTypes = {
  theme: PropTypes.shape,
  headerProps: PropTypes.shape(Header.propTypes).isRequired,
  footerProps: PropTypes.shape(Footer.propTypes).isRequired,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  theme: {},
};
