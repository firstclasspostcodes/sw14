import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { SkipLink } from '../../../components/SkipLink';
import { Pane } from '../../../components/Pane';
import { Button } from '../../../components/Button';
import { ButtonGroup } from '../../../components/ButtonGroup';
import { Tracking } from '../../../components/Tracking';
import { Navigation } from '../../../components/Navigation';
import { Logo } from '../../../components/Logo';

const Border = styled(Pane)`
  border-top-style: solid;
  border-top-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-top-color: ${({ theme }) => theme.palette.color(['gray', 2])};
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-bottom-color: ${({ theme }) => theme.palette.color(['gray', 2])};

  ${SkipLink}:focus {
    border-top: none;
  }
`;

const headerAttrs = ({
  logoProps,
  logoLinkTitle,
  logoLinkHref,
  skipLinkHref,
  navigationData,
  trackingDomain,
  onSetTrackingPreferences,
  controls,
  theme,
}) => {
  const children = (
    <Tracking.Provider domain={trackingDomain}>
      <SkipLink href={skipLinkHref} />
      <Tracking.Banner onSetPreferences={onSetTrackingPreferences} />
      <Border spacing={{ py: { xs: 0, md: 1 }, px: { xs: 0, md: theme.constants.GUTTER } }}>
        <Pane.Constrained>
          <Grid valign="stretch">
            <Grid.Shrink visible={{ xs: false, md: true }} as={Pane} spacing={{ py: 0.5, pr: 1 }}>
              <a href={logoLinkHref} title={logoLinkTitle}>
                <Logo {...logoProps} size={5} />
              </a>
            </Grid.Shrink>
            <Grid.Grow as={Pane} spacing={{ pl: { xs: 0, md: 1.5 } }}>
              <Grid valign="center">
                <Grid.Unit as={Grid} halign="left" size={{ xs: 1, md: 2 / 3 }}>
                  <Navigation data={navigationData} />
                </Grid.Unit>
                <Grid.Unit
                  as={Grid}
                  halign="right"
                  visible={{ xs: false, md: true }}
                  size={{ md: 1 / 3 }}
                >
                  <ButtonGroup halign="right">
                    {controls.map(({ text, ...props }) => (
                      <Button key={text} target="_blank" {...props}>
                        {text}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Grid.Unit>
              </Grid>
            </Grid.Grow>
          </Grid>
        </Pane.Constrained>
      </Border>
    </Tracking.Provider>
  );

  return { children };
};

export const Header = styled.header.attrs(headerAttrs)`
  contain: layout;
  flex-shrink: 0;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  z-index: ${({ theme }) => theme.stack('header')};
`;

Header.displayName = 'Header';

Header.propTypes = {
  sticky: PropTypes.bool,
  logoProps: PropTypes.shape(Logo.propTypes),
  trackingDomain: PropTypes.string.isRequired,
  logoLinkTitle: PropTypes.string,
  logoLinkHref: PropTypes.string.isRequired,
  skipLinkHref: PropTypes.string.isRequired,
  navigationData: Navigation.propTypes.data,
  onSetTrackingPreferences: PropTypes.func.isRequired,
  controls: PropTypes.arrayOf(
    PropTypes.shape({
      ...Button.propTypes,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Header.defaultProps = {
  sticky: false,
  logoLinkTitle: 'Firstclasspostcodes',
  logoProps: {},
};
