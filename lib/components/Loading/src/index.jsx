import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Typography } from '../../Typography';

const animate = keyframes`
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
`;

const Dot = styled(Typography.Text)`
  animation-name: ${animate};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-delay: 0s;

  ${Typography.Text} > &:nth-last-of-type(3) {
    animation-delay: 0s;
  }

  ${Typography.Text} > &:nth-last-of-type(2) {
    animation-delay: 0.2s;
  }

  ${Typography.Text} > &:last-child {
    animation-delay: 0.4s;
  }
`;

export const Loading = ({ children, ...props }) => (
  <Typography.Text {...props}>
    {children}
    <Dot>.</Dot>
    <Dot>.</Dot>
    <Dot>.</Dot>
  </Typography.Text>
);

Loading.propTypes = {
  children: PropTypes.any.isRequired,
};
