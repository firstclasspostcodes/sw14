import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { Pane } from '../../../components/Pane';
import { Typography } from '../../../components/Typography';
import { Logo } from '../../../components/Logo';

const footerAttrs = ({ theme, columns }) => {
  const children = (
    <Pane.Constrained>
      <Pane spacing={{ mb: 4 }}>
        <Logo color="white" border="white" size={5} />
      </Pane>
      <Grid size={1} valign="top">
        <Grid as={Grid.Unit} size={{ xs: 1, sm: 1 / 2 }}>
          {columns.map(({ heading, links }) => (
            <Grid.Unit
              size={{ xs: 1, md: 1 / columns.length }}
              as={Pane}
              key={heading}
              spacing={{ pr: 2, mb: { xs: 4, md: 0 } }}
            >
              <Typography.H4 color="white">{heading}</Typography.H4>
              {links.map(({ text, ...textProps }) => (
                <Pane key={text} spacing={{ pt: 0.5 }}>
                  <Typography.Text as="a" color="white" {...textProps}>
                    {text}
                  </Typography.Text>
                  ,
                </Pane>
              ))}
            </Grid.Unit>
          ))}
        </Grid>
      </Grid>
      <Pane spacing={{ mt: 4 }}>
        <Typography.Text color="white" size={12}>
          &copy;2019-{new Date().getFullYear()} Firstclasspostcodes
        </Typography.Text>
      </Pane>
    </Pane.Constrained>
  );
  return {
    containment: 'layout paint',
    background: 'black',
    as: 'footer',
    children,
    spacing: {
      px: theme.constants.GUTTER,
      py: 8,
    },
  };
};

export const Footer = styled(Pane).attrs(footerAttrs)`
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

Footer.displayName = 'Footer';

Footer.propTypes = {
  ...Pane.propTypes,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};
