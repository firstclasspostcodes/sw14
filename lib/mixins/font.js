import PropTypes from 'prop-types';
import { css } from 'styled-components';

const fontMixin = css`
  ${({ decoration }) => decoration && `text-decoration: ${decoration};`}
  ${({ alignment }) => alignment && `text-align: ${alignment};`}
  ${({ theme, size }) => size && `letter-spacing: ${theme.font.letterSpacing(size)};`}
  ${({ theme, size }) => size && `line-height: ${theme.font.lineHeight(size)};`}
  ${({ theme, size }) => size && `font-size: ${theme.font.fontSize(size)};`}
  --font-variation-settings: ${({ theme, weight, slant }) =>
    theme.font.featureVariations({ weight, slant })};
  ${({ theme, weight }) => weight && `font-weight: ${theme.font.weights[weight]};`}
  ${({ theme, features }) =>
    features &&
    features.length > 0 &&
    `font-feature-settings: ${theme.font.featureSettings(features)};`}
  font-variation-settings: var(--font-variation-settings, inherit);
`;

fontMixin.propTypes = {
  weight: PropTypes.string,
  decoration: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  features: PropTypes.arrayOf([PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slant: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default fontMixin;
