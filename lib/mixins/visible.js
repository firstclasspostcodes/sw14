import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';

const visibilityMap = ({ visible }) => {
  switch (typeof visible) {
    case 'string':
      return `display: ${visible};`;
    case 'undefined':
      return null;
    case 'boolean':
      return `display: ${visible ? 'flex' : 'none'};`;
    default:
      return map(visible, val => visibilityMap({ visible: val }));
  }
};

const visibleMixin = css`
  ${visibilityMap}
`;

const visibilityTypeArray = [PropTypes.bool, PropTypes.string];

visibleMixin.propTypes = {
  visible: PropTypes.oneOfType([
    ...visibilityTypeArray,
    PropTypes.shape({
      xs: PropTypes.oneOfType(visibilityTypeArray),
      sm: PropTypes.oneOfType(visibilityTypeArray),
      md: PropTypes.oneOfType(visibilityTypeArray),
      lg: PropTypes.oneOfType(visibilityTypeArray),
      xl: PropTypes.oneOfType(visibilityTypeArray),
    }),
  ]),
};

export default visibleMixin;
