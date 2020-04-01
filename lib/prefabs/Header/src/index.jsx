import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { Pane } from '../../../components/Pane';
import { Button } from '../../../components/Button';
import { ButtonGroup } from '../../../components/ButtonGroup';
import { Navigation } from '../../../components/Navigation';
import { Logo } from '../../../components/Logo';

const Border = styled(Pane)`
  border-top-style: solid;
  border-top-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-top-color: ${({ theme }) => theme.palette.color(['gray', 2])};
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-bottom-color: ${({ theme }) => theme.palette.color(['gray', 2])};
`;

const headerAttrs = ({
  logoProps,
  logoLinkTitle,
  logoLinkHref,
  navigationData,
  controls,
  theme,
}) => {
  const children = (
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
              <Grid.Unit grow as={Grid} halign="left">
                <Navigation data={navigationData} />
              </Grid.Unit>
              <Grid.Unit shrink as={Grid} halign="right" visible={{ xs: false, md: true }}>
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
  logoLinkTitle: PropTypes.string,
  logoLinkHref: PropTypes.string.isRequired,
  navigationData: Navigation.propTypes.data,
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
