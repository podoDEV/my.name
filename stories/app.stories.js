import React from 'react';
import App from '../src/App';

import {storiesOf} from '@storybook/react';

const stories = storiesOf('app test', module);

stories.add('basic', () => {
  return <App />;
});
