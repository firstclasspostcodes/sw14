import styled from 'styled-components';
import { px } from 'styled-components-spacing';

import colorMixin from '../../../mixins/color';
import fontMixin from '../../../mixins/font';
import backgroundMixin from '../../../mixins/background';

export const Badge = styled.strong`
  ${colorMixin};
  ${backgroundMixin};
  ${fontMixin};
  display: inline-flex;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  ${px({ xs: 0.5 })}
`;

Badge.propTypes = {
  ...colorMixin.propTypes,
  ...fontMixin.propTypes,
  ...backgroundMixin.propTypes,
};

Badge.defaultProps = {
  weight: 'medium',
  background: 'black',
  color: 'white',
};
