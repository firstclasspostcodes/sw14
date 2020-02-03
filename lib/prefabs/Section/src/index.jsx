import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Pane } from '../../../components/Pane';

const sectionAttrs = ({ dark }) => {
  if (dark) {
    return {
      background: 'black',
      color: 'white',
    };
  }

  return {};
};

export const Section = styled(Pane).attrs(sectionAttrs)`
  ${({ theme, color }) => color && `--color: ${theme.palette.color(color)};`}
  ${({ theme, background }) => background && `--background: ${theme.palette.color(background)};`}
`;

Section.propTypes = {
  dark: PropTypes.bool,
};

Section.defaultProps = {
  dark: false,
};
