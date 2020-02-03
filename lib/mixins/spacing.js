import PropTypes from 'prop-types';
import * as spacings from 'styled-components-spacing';
import { css } from 'styled-components';

const box = ({ theme, spacing }) =>
  Object.keys(spacing).map(key => spacings[key](spacing[key])({ theme }));

const spacingMixin = css`
  ${box}
`;

const stringOrNumberType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const spacingType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    xs: stringOrNumberType,
    sm: stringOrNumberType,
    md: stringOrNumberType,
    lg: stringOrNumberType,
    xl: stringOrNumberType,
  }),
]);

spacingMixin.propTypes = {
  spacing: PropTypes.shape({
    m: spacingType,
    my: spacingType,
    mx: spacingType,
    mt: spacingType,
    mr: spacingType,
    mb: spacingType,
    ml: spacingType,
    p: spacingType,
    py: spacingType,
    px: spacingType,
    pt: spacingType,
    pr: spacingType,
    pb: spacingType,
    pl: spacingType,
  }),
};

export default spacingMixin;
