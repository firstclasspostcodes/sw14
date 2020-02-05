import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../../components/Grid';
import { Pane } from '../../../components/Pane';
import { Typography } from '../../../components/Typography';
import { Logo } from '../../../components/Logo';

const footerAttrs = ({ columns }) => {
  const children = (
    <Pane.Constrained spacing={{}}>
      <Pane spacing={{ mb: 4 }}>
        <Logo color="white" border="white" size={5} />
      </Pane>
      <Grid size={1} valign="top">
        <Grid as={Grid.Unit} size={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
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
                  <Typography.Text color="white" {...textProps}>
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
  return { as: 'footer', children };
};

export const Footer = styled(Pane).attrs(footerAttrs)`
  .sticky & {
    flex-shrink: 0;
  }
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

Footer.defaultProps = {
  background: 'black',
  spacing: {
    px: 2,
    py: 8,
  },
};
