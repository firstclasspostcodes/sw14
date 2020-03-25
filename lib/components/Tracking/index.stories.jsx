import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tracking } from '.';

const tracking = () => {
  return (
    <Tracking.Provider>
      <Tracking.Banner />
      <Tracking.Preferences
        render={({ settings, usage, campaigns }) => {
          return (
            <>
              {settings}
              {usage}
              {campaigns}
            </>
          );
        }}
      />
    </Tracking.Provider>
  );
};

storiesOf('Components/Tracking', module).add('Context Awareness', tracking);
