import styled from 'styled-components';
import PropTypes from 'prop-types';

import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';

import { Typography } from '../../Typography';

const nonForwardedProps = [
  ...Object.keys(borderMixin.propTypes),
  ...Object.keys(backgroundMixin.propTypes),
];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

const inputProps = ({ multiline }) => ({
  as: multiline ? 'textarea' : 'input',
});

const textarea = ({ multiline }) => {
  if (!multiline) {
    return null;
  }
  return `
    resize: vertical;
    min-height: 120px;
    max-height: 600px;
  `;
};

export const TextField = styled(Typography.Text)
  .attrs(inputProps)
  .withConfig({ shouldForwardProp })`
  ${borderMixin};
  ${backgroundMixin};

  outline: none;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)};
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : null)}

  &:invalid,
  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.palette.color(['red', 7])};
    color: ${({ theme }) => theme.palette.color(['red', 7])};

    ::placeholder {
      color: ${({ theme }) => theme.palette.color(['red', 2])};
    }
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.palette.color(['gray', 2])};
    color: ${({ theme }) => theme.palette.color(['gray', 4])};

    ::placeholder {
      color: ${({ theme }) => theme.palette.color(['gray', 2])};
    }
  }

  ${textarea}
`;

TextField.propTypes = {
  ...Typography.Text.propTypes,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

TextField.defaultProps = {
  color: 'black',
  border: 'black',
  background: 'white',
  fullWidth: false,
  disabled: false,
  invalid: false,
  type: 'text',
};
