import styled from 'styled-components';

import spacingMixin from '../../../mixins/spacing';
import borderMixin from '../../../mixins/border';
import backgroundMixin from '../../../mixins/background';

export const Pane = styled.div`
  ${spacingMixin};
  ${borderMixin};
  ${backgroundMixin};
`;

Pane.propTypes = {
  ...borderMixin.propTypes,
  ...spacingMixin.propTypes,
  ...backgroundMixin.propTypes,
};

Pane.defaultProps = {
  spacing: {},
  border: 'transparent',
};

Pane.displayName = 'Pane';
