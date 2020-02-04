import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid } from '../../Grid';
import { Pane } from '../../Pane';

const Group = styled(Grid)`
  ${Pane}:first-child {
    padding-left: 0 !important;
  }
`;

export const ButtonGroup = ({ halign, children, size, ...props }) => {
  const count = React.Children.count(children);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Group halign={halign} {...props}>
      {React.Children.map(children, button => (
        <Grid.Shrink as={Pane} spacing={{ pl: 1 }} size={size || 1 / count}>
          {button}
        </Grid.Shrink>
      ))}
    </Group>
  );
};

ButtonGroup.propTypes = {
  ...Grid.propTypes,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.number,
};

ButtonGroup.defaultProps = {
  size: 1,
};
