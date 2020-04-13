'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import UserInfo from './index'

storiesOf('UserInfo', module)
  .add('UserInfo story', () => (
    <UserInfo
      userinfo={{
        username: 'Teste',
        photo: 'https://avatars1.githubusercontent.com/u/2380231?s=460&u=de895a8f440b48cd04c2f884ea2d5a90ecf4f27f&v=4',
        login: 'test',
        repos: 10,
        followers: 10,
        following: 10
      }}
    />
  ))
