import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Typography } from '../../Typography';

const http = /^https?/;

const buttonProps = ({ as = 'button', href, disabled }) => {
  const overrides = {
    as,
    rel: http.test(href) ? 'noopener nofollow' : null,
  };

  if (disabled) {
    overrides.color = ['gray', 2];
  }

  return overrides;
};

export const Button = styled(Typography.Text).attrs(buttonProps)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;
  display: inline-block;
  outline: none;
  position: relative;
  user-select: none;
  text-align: center;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : null)}
  border-style: solid;
  border-width: ${({ theme }) => theme.spacing(1, 'border')};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)};
  border-color: ${({ theme, border, background, color }) =>
    border ? theme.palette.color(background || color) : 'transparent'};
  background-color: ${({ theme, background }) =>
    background ? theme.palette.color(background) : 'transparent'};

  ${Typography.Text} + &, & + ${Typography.Text} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

Button.propTypes = {
  border: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  background: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
  ]),
  ...Typography.Text.propTypes,
};

Button.defaultProps = {
  color: 'black',
  border: true,
  fullWidth: false,
  disabled: false,
};

Button.Primary = styled(Button).attrs({
  background: 'brand',
  color: 'white',
  weight: 'medium',
})``;

Button.Primary.displayName = 'Button.Primary';

Button.Primary.propTypes = { ...Button.propTypes };

Button.Secondary = styled(Button).attrs({
  color: 'brand',
  weight: 'medium',
})``;

Button.Secondary.displayName = 'Button.Secondary';

Button.Secondary.propTypes = { ...Button.propTypes };

Button.Success = styled(Button).attrs({
  color: ['green', 6],
  weight: 'medium',
})``;

Button.Success.displayName = 'Button.Success';

Button.Success.propTypes = { ...Button.propTypes };

Button.Warning = styled(Button).attrs({
  color: ['yellow', 4],
  weight: 'medium',
})``;

Button.Warning.displayName = 'Button.Warning';

Button.Warning.propTypes = { ...Button.propTypes };

Button.Error = styled(Button).attrs({
  color: ['red', 6],
  weight: 'medium',
})``;

Button.Error.displayName = 'Button.Error';

Button.Error.propTypes = { ...Button.propTypes };
