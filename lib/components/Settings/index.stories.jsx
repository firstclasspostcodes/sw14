import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from '../Typography';
import { Select } from '../Select';
import { Tracking } from '../Tracking';
import { Settings } from '.';

const { useSetting } = Settings;

const SettingsStory = () => {
  const preferenceName = 'fruit';

  const [fruit = 'apple', setFruit] = useSetting(preferenceName);

  const handleChange = e => setFruit(e.target.value);

  return (
    <>
      <Typography.H2>Select your favorite fruit</Typography.H2>
      <Select onChange={handleChange} value={fruit}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="kiwi">Kiwi</option>
      </Select>
    </>
  );
};

storiesOf('Components/Settings', module).add('Using Settings', () => {
  return (
    <Tracking.Provider>
      <Settings.Provider>
        <Tracking.Banner />
        <SettingsStory />
      </Settings.Provider>
    </Tracking.Provider>
  );
});
