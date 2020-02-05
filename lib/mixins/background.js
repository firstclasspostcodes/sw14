import { css } from 'styled-components';

import colorMixin, { colorMap } from './color';

const backgroundMixin = css`
  ${colorMap('background')}
  background-color: var(--background, inherit);
`;

backgroundMixin.propTypes = {
  background: colorMixin.propTypes.color,
};

export default backgroundMixin;
