import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colorMixin from '../../../mixins/color';
import fontMixin from '../../../mixins/font';

import { Pane } from '../../Pane';
import { Icon, Times } from '../../Icon';
import { Typography } from '../../Typography';

const nonForwardedProps = [
  ...Object.keys(colorMixin.propTypes),
  ...Object.keys(fontMixin.propTypes),
];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

const chipAttrs = ({ color, label, onClick, spacing }) => {
  const handleClick = val => e => {
    e.preventDefault();
    e.stopPropagation();
    onClick(val);
  };

  return {
    spacing: {
      ...spacing,
      pl: 1,
      pr: 0.5,
      py: 0.5,
      m: 0.5,
      // mb: 0.5,
    },
    children: (
      <>
        <Typography.Text color={color}>{label}</Typography.Text>
        <Times onClick={handleClick(label)} color={color} size="2" />
      </>
    ),
  };
};

export const Chip = styled(Pane)
  .attrs(chipAttrs)
  .withConfig({ shouldForwardProp })`
  ${fontMixin};

  display: inline-flex;

  ${Typography.Text} {
    text-transform: lowercase;
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }

  ${Icon} {
    position: relative;
    cursor: pointer;
  }

  & + & {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

Chip.propTypes = {
  onClick: PropTypes.func,
  ...colorMixin.propTypes,
  ...Pane.propTypes,
};

Chip.defaultProps = {
  color: 'white',
  weight: 'medium',
  background: 'black',
  onClick: () => null,
};
