import React from 'react';
import Home from '../src/components/home';

import {storiesOf} from '@storybook/react';

const stories = storiesOf('home test', module);

stories.add('basic', () => {
  return <Home />;
});
