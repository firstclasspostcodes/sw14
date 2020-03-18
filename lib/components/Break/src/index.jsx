import styled from 'styled-components';

import borderMixin from '../../../mixins/color';
import spacingMixin from '../../../mixins/spacing';

export const Break = styled.hr`
  ${spacingMixin};
  ${borderMixin};
  width: 100%;
  border-top-style: solid;
  ${({ width = 1, theme }) => width && `border-top-width: ${theme.spacing(width, 'border')}`};
`;

Break.propTypes = {
  ...spacingMixin.propTypes,
  ...borderMixin.propTypes,
};

Break.defaultProps = {
  ...borderMixin.defaultProps,
  border: 'black',
  spacing: {
    my: 2,
  },
};
