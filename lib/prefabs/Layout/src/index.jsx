import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SkipLink } from '../../../components/SkipLink';
import { Pane } from '../../../components/Pane';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const Content = styled(Pane).attrs({ as: 'main' })`
  flex: 1 0 auto;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

Content.displayName = 'Layout.Content';

export const Layout = ({ headerProps, footerProps, contentProps, children }) => (
  <>
    <SkipLink href="#main-content-area" />
    <Header {...headerProps} />
    <Content id="main-content-area" {...contentProps}>
      {children}
    </Content>
    <Footer {...footerProps} />
  </>
);

Layout.propTypes = {
  headerProps: PropTypes.shape(Header.propTypes).isRequired,
  footerProps: PropTypes.shape(Footer.propTypes).isRequired,
  contentProps: PropTypes.shape(Pane.propTypes),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  contentProps: {},
};
