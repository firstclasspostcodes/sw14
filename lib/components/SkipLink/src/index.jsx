import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';

import backgroundMixin from '../../../mixins/background';

// import { Pane } from '../../Pane';
import { Typography } from '../../Typography';

const skipLinkAttrs = () => ({
  as: 'a',
  background: 'black',
  color: 'white',
  children: 'Skip to main content',
});

export const SkipLink = styled(Typography.Text).attrs(skipLinkAttrs)`
  ${backgroundMixin};
  display: block;
  padding: ${({ theme }) => theme.spacing(1.5)};

  &:not(:focus) {
    ${hideVisually}
  }
`;

SkipLink.propTypes = {
  href: PropTypes.string.isRequired,
};
