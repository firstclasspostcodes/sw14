import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';

import { Typography } from '../../Typography';

const http = /^https?/;

const buttonProps = ({ as = 'button', href, disabled, border, color, background }) => {
  const overrides = {
    as: href ? 'a' : as,
    rel: http.test(href) ? 'noopener nofollow' : null,
  };

  if (border === 'black') {
    overrides.border = color;
  }

  if (background) {
    overrides.border = background;
  }

  if (disabled) {
    overrides.color = ['gray', 2];
    overrides.border = ['gray', 2];
  }

  return overrides;
};

export const Button = styled(Typography.Text).attrs(buttonProps)`
  ${borderMixin};
  ${backgroundMixin};

  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  outline: none;
  position: relative;
  user-select: none;
  text-align: center;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  ${({ fullWidth }) => map(fullWidth, full => `width: ${full ? '100%' : 'auto'};`)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)};

  &:disabled {
    cursor: 'not-allowed';
  }

  &:hover {
    text-decoration: none !important;
  }

  ${Typography.Text} + &, & + ${Typography.Text} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

Button.propTypes = {
  ...Typography.Text.propTypes,
  ...borderMixin.propTypes,
  ...backgroundMixin.propTypes,
  fullWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      xs: PropTypes.bool,
      sm: PropTypes.bool,
      md: PropTypes.bool,
      lg: PropTypes.bool,
      xl: PropTypes.bool,
    }),
  ]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'black',
  border: 'black',
  fullWidth: false,
  disabled: false,
};
