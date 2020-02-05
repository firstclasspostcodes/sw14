import PropTypes from 'prop-types';
import { map } from 'styled-components-breakpoint';
import { css } from 'styled-components';

const colorVal = (theme, key) => color => `--${key}: ${theme.palette.color(color)};`;

export const colorMap = key => ({ theme, [key]: color }) => {
  if (!color) {
    return null;
  }
  const colorFn = colorVal(theme, key);
  if (color.constructor === Array) {
    return colorFn(color);
  }
  return map(color, colorFn);
};

const colorMixin = css`
  ${colorMap('color')}
  color: var(--color, inherit);
`;

const colorPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
]);

colorMixin.propTypes = {
  color: PropTypes.oneOfType([
    colorPropType,
    PropTypes.shape({
      xs: colorPropType,
      sm: colorPropType,
      md: colorPropType,
      lg: colorPropType,
      xl: colorPropType,
    }),
  ]),
};

export default colorMixin;
