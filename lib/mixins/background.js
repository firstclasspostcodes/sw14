import { css } from 'styled-components';

import colorMixin from './color';

const backgroundMixin = css`
  ${({ theme, background }) => background && `background-color: ${theme.palette.color(background)}`}
`;

backgroundMixin.propTypes = {
  background: colorMixin.propTypes.color,
};

export default backgroundMixin;
