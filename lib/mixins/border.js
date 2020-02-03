import { css } from 'styled-components';

import colorMixin from './color';

const borderMixin = css`
  border-style: solid;
  ${({ theme, border }) => border && `border-width: ${theme.spacing(1, 'border')}`};
  ${({ theme, border }) => border && `border-color: ${theme.palette.color(border)}`};
`;

borderMixin.propTypes = {
  border: colorMixin.propTypes.color,
};

export default borderMixin;
