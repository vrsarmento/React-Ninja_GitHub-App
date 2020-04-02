'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from 'components/app-content'
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      repoType: null,
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `http://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13

    if (key === ENTER) {
      this.setState({ isFetching: true })
      ajax()
        .get(this.getGitHubApiUrl(value))
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
        .always(() =>
          this.setState({ isFetching: false })
        )
    }
  }

  getRepos (type) {
    return (e) => {
      this.setState({ repoType: type })
      if (!this.state[type].length) {
        ajax()
          .get(this.getGitHubApiUrl(this.state.userinfo.login, type))
          .then(result => {
            this.setState({
              [type]: result.map((repo) => ({
                id: repo.id,
                name: repo.name,
                link: repo.html_url
              }))
            })
          })
      }
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
