import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, ChevronDown } from '../../Icon';
import { TextField } from '../../TextField';

const selectContainerAttrs = ({ disabled, invalid }) => {
  const overrides = {
    as: 'label',
  };

  if (disabled) {
    overrides['aria-disabled'] = disabled;
  }

  if (invalid) {
    overrides['aria-invalid'] = invalid;
  }

  return overrides;
};

const SelectContainer = styled(TextField).attrs(selectContainerAttrs)`
  display: inline-flex;
  position: relative;
  padding-right: ${({ theme }) => theme.spacing(4)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  select {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    opacity: 0.01;
  }

  ${Icon} {
    position: absolute;
    margin-top: -${({ theme, size = 1 }) => theme.spacing(Math.max(1, size))};
    top: 50%;
    right: ${({ theme }) => theme.spacing(1)};
  }
`;

export const Select = React.forwardRef(({ id, children, onChange, ...props }, inputRef) => {
  const selectRef = useRef(null);

  const [value, setValue] = useState(props.placeholder);

  useEffect(() => {
    if (inputRef) {
      if (typeof inputRef === 'function') {
        inputRef(selectRef.current);
      } else {
        // eslint-disable-next-line no-param-reassign
        inputRef.current = selectRef.current;
      }
    }
  }, [selectRef, inputRef]);

  const setCurrentSelectValue = e => {
    const { selectedIndex } = selectRef.current;
    const selected = selectRef.current.options[selectedIndex];
    setValue(selected.text);
    if (typeof onChange === 'function' && e) {
      onChange(e);
    }
  };

  useEffect(() => setCurrentSelectValue(), [children]);

  return (
    <SelectContainer htmlFor={id} {...props}>
      {value}
      <select id={id} {...props} defaultValue="" onChange={setCurrentSelectValue} ref={selectRef}>
        {children}
      </select>
      <ChevronDown />
    </SelectContainer>
  );
});

Select.propTypes = {
  ...TextField.propTypes,
  children: PropTypes.node.isRequired,
};

Select.defaultProps = TextField.defaultProps;
