import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Typography } from '../../Typography';
import { SquareEmptyAlert } from '../../Icon';

const FormText = styled(Typography.P)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const formFieldProps = ({ id, invalid, hint, input, inputProps, description, Label, label }) => {
  const isInvalid = typeof invalid === 'string' && invalid.length > 0;

  const inputOverrides = {
    ...inputProps,
    'aria-invalid': isInvalid,
    'aria-describedby': isInvalid ? `${id}-error` : null,
    name: id,
    id,
  };

  const children = (
    <>
      <Label htmlFor={id} as="label">
        {label}
      </Label>
      <Typography.P weight="light">{description}</Typography.P>
      {input(inputOverrides)}
      {invalid ? (
        <FormText id={`${id}-error`} color={['red', 7]}>
          <SquareEmptyAlert aria-hidden="false" color={['red', 7]} size={4} /> {invalid}
        </FormText>
      ) : null}
      {hint ? <FormText weight="medium">{hint}</FormText> : null}
    </>
  );

  return { children };
};

export const FormField = styled.div.attrs(formFieldProps)`
  & + & {
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    padding-top: ${({ theme }) => theme.spacing(1.5)};
    border-top-style: solid;
    border-top-width: ${({ theme }) => theme.spacing(1, 'border')};
    border-top-color: ${({ theme }) => theme.palette.color(['gray', 2])};
  }
`;

FormField.propTypes = {
  required: PropTypes.bool,
  invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string.isRequired,
  input: PropTypes.func.isRequired,
  inputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  validationMessage: PropTypes.string,
  hint: PropTypes.string,
  Label: PropTypes.elementType,
};

FormField.defaultProps = {
  invalid: false,
  required: false,
  inputProps: {},
  description: '',
  hint: '',
  validationMessage: '',
  Label: Typography.H5,
};
