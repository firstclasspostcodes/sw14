import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';

import { Pane } from '../../Pane';
import { Grid } from '../../Grid';
import { Button } from '../../Button';
import { Switch } from '../../Switch';
import { Typography } from '../../Typography';

export const COOKIE_NAME = 'tracking_policy';

export const POLICY_KEYS = ['settings', 'campaigns', 'usage'];

export const DEFAULT_POLICY = {
  confirmed: false,
  settings: false,
  campaigns: false,
  usage: false,
};

export const Context = React.createContext(null);

export const Provider = withCookies(({ domain, cookies, children }) => {
  const [policy, setPolicy] = useState(DEFAULT_POLICY);

  const setCookie = obj => cookies.set(COOKIE_NAME, obj, { domain });

  const updatePolicy = obj => {
    setCookie(obj);
    return setPolicy(obj);
  };

  useEffect(() => {
    const retrievedPolicy = cookies.get(COOKIE_NAME);
    if (!retrievedPolicy) {
      updatePolicy(DEFAULT_POLICY);
    } else {
      setPolicy(retrievedPolicy);
    }
  }, []);

  const policyContextValue = [policy, updatePolicy];

  return <Context.Provider value={policyContextValue}>{children}</Context.Provider>;
});

export const Banner = ({ title, caption, onSetPreferences }) => {
  const [policy, setPolicy] = useContext(Context);

  const { confirmed } = policy;

  if (confirmed || typeof confirmed !== 'boolean') {
    return null;
  }

  const generatePermissivePolicy = () =>
    Object.keys(policy).reduce((obj, key) => ({ [key]: true, ...obj }), {});

  const onAcceptAll = () => setPolicy(generatePermissivePolicy());

  return (
    <Pane id="cookie-banner" spacing={{ p: 2 }} background="black" color="white">
      <Grid as={Pane.Constrained} valign="bottom">
        <Grid.Unit grow={{ sm: true }} size={{ xs: 1, sm: 1 }}>
          <Typography.H5 alignment={{ xs: 'center', sm: 'left' }}>{title}</Typography.H5>
          {caption && (
            <Typography.P alignment={{ xs: 'center', sm: 'left' }}>{caption}</Typography.P>
          )}
        </Grid.Unit>
        <Grid.Unit
          as={Pane}
          spacing={{ mt: { xs: 2, sm: 0 } }}
          shrink={{ sm: true }}
          size={{ xs: 1 / 2, sm: 1 }}
        >
          <Button fullWidth border="transparent" color="white" onClick={onSetPreferences}>
            Preferences
          </Button>
        </Grid.Unit>
        <Grid.Unit
          as={Pane}
          spacing={{ mt: { xs: 2, sm: 0 } }}
          shrink={{ sm: true }}
          size={{ xs: 1 / 2, sm: 1 }}
        >
          <Button fullWidth onClick={onAcceptAll} color="black" background="white">
            Accept
          </Button>
        </Grid.Unit>
      </Grid>
    </Pane>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  onSetPreferences: PropTypes.func.isRequired,
};

Banner.defaultProps = {
  title: 'Tell us whether you accept cookies.',
  caption: `
    We use cookies to make the website work 
    as well as possible and improve our services.
  `,
};

export const Preferences = ({ render, ...props }) => {
  const [policy, setPolicy] = useContext(Context);

  const onSettingsToggle = e => setPolicy({ ...policy, [e.target.name]: e.target.checked });

  const switches = POLICY_KEYS.reduce(
    (obj, key) => ({
      ...obj,
      [key]: (
        <Switch {...props[key]} name={key} checked={policy[key]} onChange={onSettingsToggle} />
      ),
    }),
    {}
  );

  return render(switches);
};

Preferences.propTypes = {
  render: PropTypes.func.isRequired,
  ...POLICY_KEYS.reduce(
    (obj, key) => ({
      ...obj,
      [key]: PropTypes.shape({
        label: PropTypes.string.isRequired,
      }),
    }),
    {}
  ),
};

Preferences.defaultProps = {
  usage: {
    label: 'Use cookies that measure my website use.',
  },
  settings: {
    label: 'Use cookies that remember my settings.',
  },
  campaigns: {
    label: 'Use cookies that help with communications and marketing.',
  },
};
