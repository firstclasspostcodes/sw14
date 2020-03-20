import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Chip } from './chip';
import { Grid } from '../../Grid';
import { Pane } from '../../Pane';
import { TextField } from '../../TextField';

const Chips = styled(Grid.Unit)`
  flex-basis: auto;
`;

const InputContainer = styled(Grid.Unit)`
  flex-grow: 1;
  flex-basis: 10%;
`;

export const ChipField = ({ chips, onChange, onBeforeAdd, placeholder }) => {
  const [values, setValues] = useState(chips);

  const handleUpdate = list => [setValues(list), onChange(list)];

  const handleDelete = index => {
    values.splice(index, 1);
    return handleUpdate(Array(...values));
  };

  const handlePop = () => {
    const { label } = values.pop();
    handleUpdate(Array(...values));
    return label;
  };

  const handleAdd = (...additions) => {
    const chipsToAdd = additions.map(value => onBeforeAdd(value));
    return handleUpdate(Array(...values.concat(chipsToAdd)));
  };

  const handleKeyUp = e => {
    e.preventDefault();
    e.stopPropagation();

    const {
      key,
      target: { value },
    } = e;

    if (key === ' ' || key === 'Enter') {
      const additions = value.split(' ').filter(Boolean);
      handleAdd(...additions);
      e.target.value = '';
      return true;
    }

    if ((key === 'Backspace', value === '' && values.length > 0)) {
      const text = handlePop();
      e.target.value = text;
    }

    return true;
  };

  return (
    <Pane spacing={{ p: 0 }} border="black">
      <Grid valign="center" halign="left">
        <Chips>
          {values.map((chipProps, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Chip key={i} {...chipProps} onClick={val => handleDelete(i, val)} />
          ))}
        </Chips>
        <InputContainer>
          <TextField
            onKeyUp={handleKeyUp}
            border="transparent"
            type="text"
            variant="text"
            placeholder={placeholder}
            fullWidth
          />
        </InputContainer>
      </Grid>
    </Pane>
  );
};

ChipField.propTypes = {
  onChange: PropTypes.func,
  onBeforeAdd: PropTypes.func,
  chips: PropTypes.arrayOf(PropTypes.shape(Chip.propTypes)).isRequired,
  inputProps: PropTypes.shape(TextField.propTypes),
  placeholder: PropTypes.string,
};

ChipField.defaultProps = {
  onChange: () => null,
  placeholder: '',
  inputProps: {},
  onBeforeAdd: val => ({ label: val }),
};
