'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  repoType,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.repos.length && repoType === 'repos' &&
      <Repos
        title='Repositórios'
        className='repos'
        repos={repos}
        handlePagination={(clicked) => handlePagination('repos', clicked)}
      />
    }
    {!!starred.repos.length && repoType === 'starred' &&
      <Repos
        title='Favoritos'
        className='starred'
        repos={starred}
        handlePagination={(clicked) => handlePagination('starred', clicked)}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired,
  repoType: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired
}

export default AppContent
