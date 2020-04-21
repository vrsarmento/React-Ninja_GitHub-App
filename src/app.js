'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from 'components/app-content'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      repoType: null,
      isFetching: false
    }
    this.perPage = 3
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
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
            repos: initialReposState,
            starred: initialReposState
          })
        })
        .always(() =>
          this.setState({ isFetching: false })
        )
    }
  }

  getRepos (type, page) {
    return (e) => {
      this.setState({ repoType: type })
      ajax().get(this.getGitHubApiUrl(this.state.userinfo.login, type, page))
        .then(result => {
          this.setState({
            [type]: {
              repos: result.map((repo) => ({
                id: repo.id,
                name: repo.name,
                link: repo.html_url
              })),
              pagination: this.state[type].pagination
            }
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      handlePagination={(type, page) => this.getRepos(type, page)()}
    />
  }
}

export default App
