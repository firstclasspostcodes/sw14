import PropTypes from 'prop-types';
import { css } from 'styled-components';

const fontMixin = css`
  ${({ slant }) => slant && `--font-slant: ${slant};`}
  ${({ theme, weight }) => weight && `--font-weight: ${theme.font.weights[weight]};`}
  ${({ weight }) => weight && `font-weight: var(--font-weight, inherit);`}
  font-style: normal;
  font-variation-settings: 
    'wght' var(--font-weight, ${({ theme }) => theme.font.weights.regular}), 
    'slnt' var(--font-slant, 0);
  ${({ decoration }) => decoration && `text-decoration: ${decoration};`}
  ${({ alignment }) => alignment && `text-align: ${alignment};`}
  ${({ theme, size }) => size && `letter-spacing: ${theme.font.letterSpacing(size)};`}
  ${({ theme, size }) => size && `line-height: ${theme.font.lineHeight(size)};`}
  ${({ theme, size }) => size && `font-size: ${theme.font.fontSize(size)};`}
  ${({ theme, features }) =>
    features &&
    features.length > 0 &&
    `font-feature-settings: ${theme.font.featureSettings(features)};`}
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
