import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from '../Typography';
import { Select } from '../Select';
import { Settings } from '.';

const { connectSettings, useSetting } = Settings;

const SettingsStory = connectSettings(() => {
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
});

storiesOf('Components/Settings', module).add('Using Settings', () => {
  return <SettingsStory />;
});
