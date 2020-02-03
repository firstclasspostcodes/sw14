import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid } from '../../Grid';
import { Button } from '../../Button';

const Group = styled(Grid)`
  ${Grid.Unit}:not(:first-child) {
    ${Button} {
      border-left: none;
    }
  }
`;

export const ButtonGroup = ({ children, initial, onChange, size, ...props }) => {
  const [selected, setSelected] = useState(initial);

  const handleSelected = key => [setSelected(key), onChange(key)];

  const count = React.Children.count(children);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Group {...props}>
      {React.Children.map(children, button => (
        <Grid.Unit size={size || 1 / count}>
          {React.cloneElement(button, {
            fullWidth: true,
            variant: selected === button.key ? 'contained' : 'outlined',
            onClick: () => handleSelected(button.key),
          })}
        </Grid.Unit>
      ))}
    </Group>
  );
};

ButtonGroup.propTypes = {
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onChange: PropTypes.func,
  size: PropTypes.number,
};

ButtonGroup.defaultProps = {
  initial: '',
  size: 0,
  onChange: () => null,
};
