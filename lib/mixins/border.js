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
  ${({ border, theme }) => borderMap(border, () => `border-width: ${theme.spacing(1, 'border')}`)};
  ${colorMap('border')}
  border-color: var(--border, inherit);
`;

borderMixin.propTypes = {
  border: colorMixin.propTypes.color,
};

export default borderMixin;
