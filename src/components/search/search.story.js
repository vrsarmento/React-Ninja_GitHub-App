'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Search from './index'

storiesOf('Search', module)
  .add('Search disabled', () => (
    <Search
      isDisabled={true}
    />
  ))
  .add('Search enabled', () => (
    <Search
      isDisabled={false}
    />
  ))
  .add('Search keyUp', () => (
    <Search
      isDisabled={false}
      handleSearch={action('Key Up')}
    />
  ))
