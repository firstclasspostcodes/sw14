import styled from 'styled-components';
import PropTypes from 'prop-types';
import { map } from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';

const nonForwardedProps = ['shrink', 'grow', 'size'];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

const Component = styled(Grid)`
  ${({ direction }) => direction && `flex-direction: ${direction};`}
`;

const flexType = (type, val) => {
  if (!val) {
    return null;
  }
  switch (typeof val) {
    case 'boolean':
      return `
        flex-${type}: 1;
        flex-basis: auto;
      `;
    case 'object':
      return map(val, breakpointVal => flexType(type, breakpointVal));
    default:
      console.warn(`<Grid.Unit/> ignoring encountered prop "${type}" type "${typeof val}".`);
      return null;
  }
};

Component.Unit = styled(Grid.Unit).withConfig({ shouldForwardProp })`
  ${({ shrink }) => flexType('shrink', shrink)};
  ${({ grow }) => flexType('grow', grow)};
`;

const breakpointBoolType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
  }),
]);

Component.Unit.propTypes = {
  ...Grid.Unit.propTypes,
  shrink: breakpointBoolType,
  grow: breakpointBoolType,
};

Component.Shrink = styled(Grid.Unit)`
  flex-shrink: 1;
  flex-basis: auto;
`;

Component.Grow = styled(Grid.Unit)`
  flex-grow: 1;
  flex-basis: auto;
`;

export default Component;
