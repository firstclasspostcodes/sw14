import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Pane } from '../../../components/Pane';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const Content = styled(Pane).attrs({ as: 'main' })`
  flex: 1 0 auto;
`;

Content.displayName = 'Layout.Content';

export const Layout = ({ headerProps, footerProps, contentProps, children }) => (
  <>
    <Header {...headerProps} skipLinkHref="#main-content-area" />
    <Content id="main-content-area" {...contentProps} spacing={contentProps.spacing || {}}>
      {React.Children.map(children, child => {
        if (child.type === Pane) {
          return React.cloneElement(child, {
            as: Pane.Constrained,
            spacing: {
              ...child.props.spacing,
              px: 2,
            },
          });
        }
        return <Pane.Constrained spacing={{ px: 2 }}>{child}</Pane.Constrained>;
      })}
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
