import { rem } from 'polished';

import { BASE_SIZE } from './constants';
import Font from './font.json';

const fontSize = px => rem(parseFloat(px), BASE_SIZE);

const lineHeight = px => rem(Math.round(px * Font.lineHeightModifier), BASE_SIZE);

const letterSpacing = px => {
  const { a, b, c } = Font.tracking;
  return rem(a + b * Math.E ** (c * px), BASE_SIZE);
};

const featureVariations = ({ weight, slant }) => {
  if (!weight && !slant) {
    return 'inherit';
  }
  const parts = [];
  if (!Number.isNaN(weight)) {
    parts.push(`'wght' ${Font.weights[weight] || Font.weights.regular}`);
  }
  if (!Number.isNaN(slant)) {
    parts.push(`'slnt' ${slant || 0}`);
  }
  return parts.join(', ');
};

const featureSettings = (...list) =>
  list
    .concat(Font.defaultFeatures)
    .map(feat => `"${feat}" 1`)
    .join(', ');

export default {
  ...Font,
  fontSize,
  lineHeight,
  featureVariations,
  featureSettings,
  letterSpacing,
};
