import PropTypes from 'prop-types';
import { map } from 'styled-components-breakpoint';
import { css } from 'styled-components';

const sizeMap = ({ theme, size }) => {
  if (!size) {
    return null;
  }
  switch (typeof size) {
    case 'string':
    case 'number':
      return `
        letter-spacing: ${theme.font.letterSpacing(size)};
        line-height: ${theme.font.lineHeight(size)};
        font-size: ${theme.font.fontSize(size)};
      `;
    case 'object':
    default:
      return map(size, val => sizeMap({ theme, size: val }));
  }
};

const fontMixin = css`
  ${({ slant }) => slant && `--font-slant: ${slant};`}
  ${({ theme, weight }) => weight && `--font-weight: ${theme.font.weights[weight]};`}
  font-weight: var(--font-weight, inherit);
  font-style: normal;
  font-variation-settings: 
    'wght' var(--font-weight, ${({ theme }) => theme.font.weights.regular}), 
    'slnt' var(--font-slant, 0);
  ${({ decoration }) => decoration && `text-decoration: ${decoration};`}
  ${({ alignment }) => alignment && map(alignment, val => `text-align: ${val};`)}
  ${sizeMap}
  ${({ theme, features }) =>
    features &&
    features.length > 0 &&
    `font-feature-settings: ${theme.font.featureSettings(features)};`}
`;

const alignmentPropType = PropTypes.oneOf(['left', 'right', 'center', 'justify']);

const sizePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

fontMixin.propTypes = {
  weight: PropTypes.string,
  decoration: PropTypes.string,
  features: PropTypes.arrayOf([PropTypes.string]),
  slant: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignment: PropTypes.oneOfType([
    alignmentPropType,
    PropTypes.shape({
      xs: alignmentPropType,
      sm: alignmentPropType,
      md: alignmentPropType,
      lg: alignmentPropType,
      xl: alignmentPropType,
    }),
  ]),
  size: PropTypes.oneOfType([
    sizePropType,
    PropTypes.shape({
      xs: sizePropType,
      sm: sizePropType,
      md: sizePropType,
      lg: sizePropType,
      xl: sizePropType,
    }),
  ]),
};

export default fontMixin;
