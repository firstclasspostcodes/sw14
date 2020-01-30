import styled from 'styled-components';
import * as spacings from 'styled-components-spacing';
import PropTypes from 'prop-types';

const box = ({ theme, spacing }) =>
  Object.keys(spacing).map(key => spacings[key](spacing[key])({ theme }));

export const Pane = styled.div`
  ${box}
  border-style: solid;
  border-width: ${({ theme, border }) => (border ? theme.spacing(1, 'border') : '0px')};
  border-color: ${({ theme, border }) => (border ? theme.palette.color(border) : 'transparent')};
  ${({ theme, background }) => background && `background-color: ${theme.palette.color(background)}`}
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

const colorType = PropTypes.oneOf([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
]);

Pane.propTypes = {
  border: colorType,
  background: colorType,
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

Pane.defaultProps = {
  spacing: {},
  border: false,
};

Pane.displayName = 'Pane';
