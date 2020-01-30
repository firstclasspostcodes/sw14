import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Icon = styled.span.attrs(() => ({}))`
  display: inline-flex;
  position: relative;
  
  & > svg {
    ${({ theme, color }) => color && `stroke: ${theme.palette.color(color)};`}
    ${({ theme, color }) => color && `fill: ${theme.palette.color(color)};`}
    ${({ theme, size }) => size && `width: ${theme.spacing(size)};`}
    ${({ theme, size }) => size && `height: ${theme.spacing(size)};`}
  }
`;

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
  ]),
};

export const createIcon = (path, displayName) => {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Icon ref={ref} {...props}>
        {path}
      </Icon>
    ))
  );

  Component.displayName = `${displayName}Icon`;

  return Component;
};
