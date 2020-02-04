import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { SkipLink } from '../../../components/SkipLink';
import { Pane } from '../../../components/Pane';
import { Button } from '../../../components/Button';
import { ButtonGroup } from '../../../components/ButtonGroup';
import { Typography } from '../../../components/Typography';
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

export const Header = ({ logoLinkTitle, logoLinkHref, skipLinkHref, navigation, controls }) => {
  return (
    <>
      <SkipLink href={skipLinkHref} />
      <Border spacing={{ p: { xs: 0, md: 1 } }}>
        <Grid valign="stretch">
          <Grid.Shrink visible={{ xs: false, md: true }} as={Pane} spacing={{ p: 1 }}>
            <a href={logoLinkHref} title={logoLinkTitle}>
              <Logo size={5} />
            </a>
          </Grid.Shrink>
          <Grid.Grow as={Pane} spacing={{ pl: { xs: 0, md: 1.5 } }}>
            <Grid valign="center">
              <Grid.Unit as={Grid} halign="left" size={{ xs: 1, md: 2 / 3 }}>
                {navigation}
              </Grid.Unit>
              <Grid.Unit as={Grid} halign="right" size={{ xs: 1, md: 1 / 3 }}>
                <ButtonGroup halign="right">{controls}</ButtonGroup>
              </Grid.Unit>
            </Grid>
          </Grid.Grow>
        </Grid>
      </Border>
    </>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  logoLinkTitle: PropTypes.string,
  logoLinkHref: PropTypes.string.isRequired,
  skipLinkHref: PropTypes.string.isRequired,
  navigation: PropTypes.node.isRequired,
  controls: ButtonGroup.propTypes.children.isRequired,
};

Header.defaultProps = {
  logoLinkTitle: 'Firstclasspostcodes',
};
