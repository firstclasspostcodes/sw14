import React, { useContext, useState, useDebugValue } from 'react';
import PropTypes from 'prop-types';

import { Tracking } from '../../Tracking';

const SETTINGS_COOKIE = 'settings';

const Context = React.createContext(null);

const { useTracking } = Tracking;

export const useSetting = name => {
  const [enabled, getSettings, saveSetting] = useContext(Context);

  let initialValue;

  if (enabled) {
    initialValue = getSettings()[name] || initialValue;
  }

  const [value, setValue] = useState(initialValue);

  let updateSetting = () => null;

  if (enabled) {
    updateSetting = updatedValue => {
      saveSetting(name, updatedValue);
      setValue(updatedValue);
    };
  }

  return [value, updateSetting];
};

export const Provider = ({ children }) => {
  const [{ settings }, , { getCookie, setCookie }] = useTracking();

  const getSettings = () => getCookie(SETTINGS_COOKIE) || {};

  const saveSetting = (name, value) => {
    const current = getSettings();
    const updated = { ...current, [name]: value };
    setCookie(SETTINGS_COOKIE, updated);
    return true;
  };

  useDebugValue(`Storing settings is ${settings ? 'enabled' : 'disabled'}.`);

  const value = [settings, getSettings, saveSetting];

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.displayName = 'Tracking.Provider';

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};
