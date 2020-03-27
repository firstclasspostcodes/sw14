import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SkipLink } from '../../../components/SkipLink';
import { Tracking } from '../../../components/Tracking';
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

export const Layout = ({
  trackingDomain,
  setTrackingPreferences,
  skipLinkHref,
  headerProps,
  footerProps,
  contentProps,
  children,
}) => (
  <Tracking.Provider domain={trackingDomain}>
    <SkipLink href={skipLinkHref} />
    <Tracking.Banner onSetPreferences={setTrackingPreferences} />
    <Header skipLinkHref="#main-content-area" {...headerProps} />
    <Content id="main-content-area" {...contentProps}>
      {children}
    </Content>
    <Footer {...footerProps} />
  </Tracking.Provider>
);

Layout.propTypes = {
  trackingDomain: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  skipLinkHref: PropTypes.string.isRequired,
  headerProps: PropTypes.shape(Header.propTypes).isRequired,
  footerProps: PropTypes.shape(Footer.propTypes).isRequired,
  contentProps: PropTypes.shape(Pane.propTypes),
  children: PropTypes.node.isRequired,
  setTrackingPreferences: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  trackingDomain: null,
  contentProps: {},
};
