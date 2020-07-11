import React, { useContext, useState } from 'react';
import { withCookies } from 'react-cookie';
import PropTypes from 'prop-types';

const SETTINGS_COOKIE = 'settings';

const Context = React.createContext(null);

const defaultCookieOptions = {
  path: '/',
  sameSite: 'strict',
  maxAge: 60 * 60 * 24 * 365,
};

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

export const Provider = withCookies(({ domain, cookies, children }) => {
  const cookieOptions = { domain, ...defaultCookieOptions };

  const getSettings = () => cookies.get(SETTINGS_COOKIE) || {};

  const saveSetting = (name, value) => {
    const current = getSettings();
    const updated = { ...current, [name]: value };
    cookies.set(SETTINGS_COOKIE, updated, cookieOptions);
    return true;
  };

  const value = [getSettings(), getSettings, saveSetting];

  return <Context.Provider value={value}>{children}</Context.Provider>;
});

Provider.displayName = 'Settings.Provider';

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const connectSettings = WrappedComponent =>
  React.forwardRef((props, ref) => (
    <Provider>
      <WrappedComponent {...props} ref={ref} />
    </Provider>
  ));
