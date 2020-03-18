import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';

import colorMixin, { colorMap } from './color';

const borderMap = (border, fn) => {
  if (!border) {
    return null;
  }
  if (border.constructor === Array) {
    return fn();
  }
  return map(border, fn);
};

const borderMixin = css`
  ${({ border }) => borderMap(border, () => `border-style: solid`)};
  ${({ width = 1, theme }) => width && `border-width: ${theme.spacing(width, 'border')}`};
  ${colorMap('border')}
  border-color: var(--border, inherit);
`;

borderMixin.propTypes = {
  border: colorMixin.propTypes.color,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

borderMixin.defaultProps = {
  width: 1,
};

export default borderMixin;
