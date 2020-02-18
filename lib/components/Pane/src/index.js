import styled from 'styled-components';

import colorMixin from '../../../mixins/color';
import spacingMixin from '../../../mixins/spacing';
import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';

export const Pane = styled.div`
  ${colorMixin};
  ${spacingMixin};
  ${borderMixin};
  ${backgroundMixin};
`;

Pane.propTypes = {
  ...colorMixin.propTypes,
  ...borderMixin.propTypes,
  ...spacingMixin.propTypes,
  ...backgroundMixin.propTypes,
};

Pane.defaultProps = {
  spacing: {},
};

Pane.displayName = 'Pane';

Pane.Constrained = styled(Pane)`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
`;

Pane.Constrained.propTypes = Pane.propTypes;

Pane.Constrained.displayName = 'Pane.Constrained';
