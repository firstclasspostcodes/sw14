import styled from 'styled-components';
import PropTypes from 'prop-types';

import colorMixin from '../../../mixins/color';
import spacingMixin from '../../../mixins/spacing';
import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';
import visibleMixin from '../../../mixins/visible';

export const Pane = styled.div`
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
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
`;

Pane.Constrained.propTypes = Pane.propTypes;

Pane.Constrained.displayName = 'Pane.Constrained';
