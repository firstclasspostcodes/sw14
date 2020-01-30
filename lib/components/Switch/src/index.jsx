import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid } from '../../Grid';
import { Pane } from '../../Pane';
import { Typography } from '../../Typography';

const Pointer = styled(Grid)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Shrink = styled(Grid.Unit)`
  flex-shrink: 1;
  flex-basis: auto;
`;

const sliderProps = ({ name, checked }) => ({
  children: <input type="checkbox" id={name} name={name} checked={checked} />,
});

const Slider = styled.div.attrs(sliderProps)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  display: inline-flex;
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, color }) => theme.palette.color(color)};

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

  &:before {
    ${({ theme, checked }) => (checked ? `transform: translateX(${theme.spacing(4)});` : null)}
  }

  input[type='checkbox'] {
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
  }
`;

export const Switch = ({ onChange, label, description, checked: initial, ...props }) => {
  const [selected, setSelected] = useState(initial);

  const { color, disabled, invalid } = props;

  const typographyProps = {};

  const overrides = props;

  const handleSelected = state => [setSelected(state), onChange(state)];

  let onClick = () => handleSelected(!selected);

  typographyProps.color = color;

  if (!selected) {
    let name = color || 'gray';
    if (color && typeof color !== 'string') {
      [name] = color;
    }
    if (name === 'black') {
      name = 'gray';
    }
    overrides.color = [name, 2];
  }

  if (disabled) {
    onClick = () => null;
    typographyProps.color = ['gray', 2];
    overrides.color = ['gray', 2];
  }

  if (invalid) {
    typographyProps.color = ['red', 7];
    overrides.color = ['red', 7];

    if (!selected) {
      overrides.color = ['red', 2];
    }
  }

  const slider = <Shrink {...overrides} as={Slider} onClick={onClick} checked={selected} />;

  if (!label) {
    return slider;
  }

  return (
    <Pointer disabled={disabled} onClick={onClick} wrap={false}>
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
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  checked: PropTypes.bool,
  color: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
  ]),
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
  onChange: () => null,
};
