import styled from 'styled-components';
import PropTypes from 'prop-types';

import colorMixin from '../../../mixins/color';
import spacingMixin from '../../../mixins/spacing';
import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';
import visibleMixin from '../../../mixins/visible';

const nonForwardedProps = [
  'containment',
  ...Object.keys(colorMixin.propTypes),
  ...Object.keys(spacingMixin.propTypes),
  ...Object.keys(borderMixin.propTypes),
  ...Object.keys(backgroundMixin.propTypes),
  ...Object.keys(visibleMixin.propTypes),
];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

export const Pane = styled.div.withConfig({ shouldForwardProp })`
  ${({ containment }) => containment && `contain: ${containment};`}
  ${colorMixin};
  ${spacingMixin};
  ${borderMixin};
  ${backgroundMixin};
  ${visibleMixin};
`;

Pane.propTypes = {
  ...colorMixin.propTypes,
  ...borderMixin.propTypes,
  ...spacingMixin.propTypes,
  ...backgroundMixin.propTypes,
  ...visibleMixin.propTypes,
  containment: PropTypes.string,
};

Pane.displayName = 'Pane';

Pane.Constrained = styled(Pane)`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth, theme }) => maxWidth || theme.breakpoints.xl}px;
`;

Pane.Constrained.propTypes = {
  ...Pane.propTypes,
  maxWidth: PropTypes.number,
};

Pane.Constrained.displayName = 'Pane.Constrained';
