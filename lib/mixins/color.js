import PropTypes from 'prop-types';
import { css } from 'styled-components';

const colorMixin = css`
  ${({ theme, color }) => color && `--color: ${theme.palette.color(color)};`}
  color: var(--color, inherit);
`;

colorMixin.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

export default colorMixin;
