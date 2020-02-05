import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Icon = styled.span.attrs(() => ({}))`
  display: inline-flex;
  position: relative;
  
  & > svg {
    ${({ theme, path, color }) => color && `${path}: ${theme.palette.color(color)};`}
    ${({ theme, size }) => size && `width: ${theme.spacing(size)};`}
    ${({ theme, size }) => size && `height: ${theme.spacing(size)};`}
  }
`;

Icon.propTypes = {
  path: PropTypes.oneOf(['outline', 'fill']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

Icon.defaultProps = {
  path: 'fill',
};

export const createIcon = (path, displayName) => {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <Icon ref={ref} {...props}>
        {path}
      </Icon>
    ))
  );

  Component.displayName = `${displayName}Icon`;

  return Component;
};
