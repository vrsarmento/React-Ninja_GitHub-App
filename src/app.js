'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13
    if (key === ENTER) {
      ajax()
        .get(`http://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
    }
  }

  getRepos (type) {
    return (e) => {
      ajax()
        .get(`http://api.github.com/users/${this.state.userinfo.login}/${type}`)
        .then(result => {
          this.setState({
            [type]: result.map((repo) => ({
                id: repo.id,
                name: repo.name,
                link: repo.url
              }))
            })
          })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
