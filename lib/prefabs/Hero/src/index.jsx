import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { Pane } from '../../../components/Pane';
import { Button } from '../../../components/Button';
import { Typography } from '../../../components/Typography';

export const Hero = ({ reverse, title, tease, caption, children, buttonProps }) => {
  return (
    <Grid valign="stretch" halign="center" reverse={reverse}>
      <Grid.Unit size={4 / 10}>
        <Typography.H1 size="64">{title}</Typography.H1>
        <Typography.Caption>{caption}</Typography.Caption>
        <Grid as={Pane} spacing={{ mt: 4 }} valign="center">
          <Grid.Shrink>
            <Button {...buttonProps} background="black" color="white" weight="medium" size="18" />
          </Grid.Shrink>
          {tease ? (
            <Grid.Unit as={Pane} spacing={{ pl: 2 }} size={1 / 2}>
              <Typography.P color={['gray', 6]}>{tease}</Typography.P>
            </Grid.Unit>
          ) : null}
        </Grid>
      </Grid.Unit>
      <Grid.Unit as={Grid} size={6 / 10} halign="center" valign="center">
        <Grid.Unit size={4 / 6}>{children}</Grid.Unit>
      </Grid.Unit>
    </Grid>
  );
};

Hero.displayName = 'Hero';

Hero.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  tease: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttonProps: PropTypes.any,
};

Hero.defaultProps = {
  reverse: false,
  buttonProps: {},
};
