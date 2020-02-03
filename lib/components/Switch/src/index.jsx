import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../Grid';
import { Pane } from '../../Pane';
import { Typography } from '../../Typography';

const Pointer = styled(Grid)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Label = styled.label`
  display: flex;

  & + & {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

const Input = styled.input`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  opacity: 0;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
  padding: 0px;
`;

const Slider = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.color(['gray', 2])};

  &:before {
    position: absolute;
    content: '';
    height: ${({ theme }) => theme.spacing(3)};
    width: ${({ theme }) => theme.spacing(3)};
    left: ${({ theme }) => theme.spacing(0.5)};
    bottom: ${({ theme }) => theme.spacing(0.5)};
    background-color: ${({ theme }) => theme.palette.gray[0]};
    transition: 0.4s;
  }

  ${Input}:checked + & {
    background-color: ${({ theme, color }) => {
      if (typeof color === 'string') {
        return theme.palette.color([color, 7]);
      }
      return theme.palette.color(color);
    }};
  }

  ${Input}:checked + &:before {
    transform: translateX(${({ theme }) => theme.spacing(4)});
  }

  ${Input}:disabled + & {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.color(['gray', 2])};
  }

  ${Input}[aria-invalid='true'] + & {
    background-color: ${({ theme }) => theme.palette.color(['red', 2])};
  }

  ${Input}[aria-invalid='true']:checked + & {
    background-color: ${({ theme }) => theme.palette.color(['red', 7])};
  }
`;

export const Switch = ({
  type,
  id,
  name,
  color,
  disabled,
  invalid,
  onChange,
  label,
  description,
  checked: initial,
}) => {
  const typographyProps = {};

  if (disabled) {
    typographyProps.color = ['gray', 2];
  } else if (invalid) {
    typographyProps.color = ['red', 7];
  }

  const slider = (
    <Grid.Shrink>
      <Input
        type={type}
        defaultChecked={initial}
        onChange={onChange}
        id={id}
        name={name}
        aria-invalid={invalid}
        disabled={disabled}
      />
      <Slider color={color} />
    </Grid.Shrink>
  );

  if (!label) {
    return <Label htmlFor={name}>{slider}</Label>;
  }

  return (
    <Label htmlFor={id}>
      <Pointer disabled={disabled} wrap={false}>
        {slider}
        <Grid.Unit as={Pane} spacing={{ ml: { xs: 2 } }} size={9 / 10}>
          <Typography.H4 {...typographyProps}>{label}</Typography.H4>
          {description ? (
            <Typography.Caption {...typographyProps} size={0} weight="light" hue="5">
              {description}
            </Typography.Caption>
          ) : null}
        </Grid.Unit>
      </Pointer>
    </Label>
  );
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  checked: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  label: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  disabled: false,
  invalid: false,
  color: 'black',
  label: '',
  description: '',
  checked: false,
  type: 'checkbox',
  onChange: () => null,
};
