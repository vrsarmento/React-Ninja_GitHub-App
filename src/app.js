'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Victor Rocha',
        repos: 122,
        followers: 13,
        following: 22
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
